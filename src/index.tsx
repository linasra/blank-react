import * as ReactDOMClient from "react-dom/client";
import Router from "views/Router";

const root = ReactDOMClient.createRoot(
  document.getElementById("app") as HTMLElement
);
root.render(<Router />);
