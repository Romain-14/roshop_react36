import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./store/dark-mode/Context.jsx";
import { UserProvider } from "./store/user/Context.jsx";
import App from "./App.jsx";
import "./assets/styles/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>{/* Englober l'application du contexte DarkModeProvider (voirstore/dark-mode/Context.jsx)*/}
		<DarkModeProvider>
			<App />
		</DarkModeProvider>
	</UserProvider>
);
