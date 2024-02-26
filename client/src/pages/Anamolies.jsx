import { useEffect, useState } from "react";
import "./Anamolies.css";
export default function Anamolies() {
  const [anamoliesArr, setAnamoliesArr] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // async function fetchData() {
    //   let data = await fetch("")
    // }
    // fetchData("");
    setAnamoliesArr([
      { value1: "1000", value2: "160", value3: "60", status: 1 },
      { value1: "1067", value2: "107", value3: "70", status: 1 },
      { value1: "6760", value2: "150", value3: "20", status: 0 },
    ]);
  }, [anamoliesArr]);
  const style1 = "text-green";
  const style2 = "text-red";
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl">Anamolies</h2>
      <div className="flex items-center justify-evenly my-8">
        <div className="mx-9">Cumulative Gas Used</div>
        <div className="mx-9">Confirmations</div>
        <div className="mx-9">TX receipt status</div>
        <div className="mx-9">Anamoly</div>
      </div>
      {anamoliesArr.map((item, key) => (
        <div className="card w-[80%] flex justify-evenly rounded-2xl" key={key}>
          <div>{item.value1}</div>
          <div>{item.value2}</div>
          <div>{item.value3}</div>
          <div className={item.status === 1 ? style1 : style2}>
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
}
