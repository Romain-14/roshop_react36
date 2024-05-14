import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./store/dark-mode/Context.jsx";
import App from "./App.jsx";
import "./assets/styles/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    // Englober l'application du contexte DarkModeProvider (voir store/dark-mode/Context.jsx)
	<DarkModeProvider>
		<App />
	</DarkModeProvider>
);
