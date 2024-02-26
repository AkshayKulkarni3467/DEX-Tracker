import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import CryptoDetails from "./components/CryptoDetails";
import DashboardLayout from "./Dashboard/components/DashboardLayout";
import Support from "./Dashboard/pages/Support/Support";
import TransactionPage from "./Dashboard/pages/Transaction/Transaction";
import Dashboard from "./Dashboard/pages/Dashboard/Dashboard";
import Anamolies from "./pages/Anamolies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Crypto />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/trending",
        element: <Trending />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/saved",
        element: <Saved />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/anamolies",
    element: <Anamolies />,
  },
]);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Dashboard />,
//   },
//   {
//     path: '/transactions',
//     element: <TransactionPage />,
//   },
//   {
//     path: '/support',
//     element: <Support />,
//   },
// ])

function App() {
  return (
    // <div className="myText">
    <RouterProvider router={router} />
    // </div>
  );
}

export default App;
