from flask import Flask,request,jsonify
import pickle
from sklearn.preprocessing import RobustScaler
from requests import get
api_key  = 'DHW43XQBQ3A23E65GNQEB2Y74TMPYFQ81N'


def make_apiurl(module,action,address,**kwargs):
    url = "https://api.etherscan.io/api"+f"?module={module}&action={action}&address={address}&apikey={api_key}"
    for k,v in kwargs.items():
        url +=f'&{k}={v}'
    return url


model = pickle.load(open('model.pkl', 'rb'))

def show(address):
    params = {
    "module":"account",
    "action":"balance",
    "address":address,
    "tag":"latest",
    "apikey":api_key
    }
    get_tran_url = make_apiurl("account","txlist",address,startblock=0,endblock=99999999,page=1,offset=10000,sort="asc")
    response = get(get_tran_url)
    data = response.json()['result']
    dic = dict()
    for tx in data:
        x = model.predict([[float(tx["cumulativeGasUsed"]),float(tx["confirmations"]),float(tx["txreceipt_status"])]])
        if x == 0:
            x = 1
        else:
            x = 0
        y = (float(tx["cumulativeGasUsed"]),float(tx["confirmations"]),float(tx["txreceipt_status"]))
        dic.update({f"{y}":f"{x}"})
    return jsonify(dic)


app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    address = data.get('address')
    dicto = show(address)
    
    return dicto


if __name__ == '__main__':
    app.run()