import App from "./App";
import { createRoot } from "react-dom/client";
import { FontStyle } from "./themes/FontStyle";
import { GlobalStyle } from "./themes/GlobalStyle";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <>
    <FontStyle />
    <GlobalStyle />
    <App />
  </>
  // </React.StrictMode>
);
