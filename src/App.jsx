import React, { useContext } from "react";
import "./App.scss";
import Routes from "./pages/Routes";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ShopItemsContext } from "./contexts/ShopContext";
import Loader from "./components/Loader";
import "./config/global";

function App() {
  const { isAppLoading } = useContext(ShopItemsContext);

  if (isAppLoading) {
    return <Loader />;
  }
  return (
    <>
      <Routes></Routes>
    </>
  );
}

export default App;
