import Coin from "./pages/Coin";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:coinId", element: <Coin /> },
    ],
  },
];

export default routes;
