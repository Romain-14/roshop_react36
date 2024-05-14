import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./store/dark-mode/Context.jsx";
import App from "./App.jsx";
import "./assets/styles/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
            <DarkModeProvider>
                    <App />
            </DarkModeProvider>
);
