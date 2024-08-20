import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./contexts/ShopContext.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
