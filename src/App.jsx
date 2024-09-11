import React, { useContext } from "react";
import "./App.scss";
import Routes from "./pages/Routes";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { ProductsContext } from "./contexts/ProductsContext";
import Loader from "./components/Loader";
import "./config/global";
import { Toaster } from "sonner";

function App() {
  const { isAppLoading } = useContext(ProductsContext);

  if (isAppLoading) {
    return <Loader />;
  }
  return (
    <>
      <Toaster richColors position="bottom-right" />
      <Routes></Routes>
    </>
  );
}

export default App;
