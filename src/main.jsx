// Css import
import "./index.css";

// Library import
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Component import
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
