import App from "./app.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./provider/authProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
