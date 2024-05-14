import { createContext, useState } from "react";
import PropTypes from "prop-types";

const Context = createContext();

// children est disponible dans l'objet props
// function DarkModeProvider(props) {
function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = isDarkMode ? "dark" : "light";

	return (
		<Context.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
			{children} {/* props.children */}
		</Context.Provider>
	);
}


export { DarkModeProvider };

export default Context;

DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};