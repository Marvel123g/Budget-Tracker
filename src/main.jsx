import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./scss/App.scss";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>
);
