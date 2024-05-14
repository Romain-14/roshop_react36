import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Création du context pour le dark mode, createContext retourne un objet avec 2 propriétés : Provider et Consumer
// Provider est un composant qui va englober l'ensemble de l'application
// Consumer est un composant qui va permettre de consommer les données du context MAIS N'est plus utilisé depuis React 16.3 grâce au Hook useContext

const Context = createContext();

// children est disponible dans l'objet props, on peut le déstructurer directement dans les paramètres de la fonction
// Ce composant va permettre de gérer le thème de l'application et de le passer à l'ensemble des composants enfants englobés par le Provider voir main.jsx
// On utilise le hook useState pour gérer l'état de notre application

function DarkModeProvider({ children }) { // function DarkModeProvider(props) {
	const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = isDarkMode ? "dark" : "light";

	return (
        // On passe les valeurs de notre contexte via la propriété value
        // Ces valeurs sont accessibles depuis les composants enfants via le hook useContext
        // ici on rends éventuellement disponible le thème, le state et la fonction pour changer le state
		<Context.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
			{children} {/* props.children */}
		</Context.Provider>
	);
}


export { DarkModeProvider };

export default Context;

// définition des types des propriétés(props) du composant
DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};