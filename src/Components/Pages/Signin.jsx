import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeContext from "../../store/dark-mode/Context";
import UserContext from "../../store/user/Context";

// Ce composant a été généré par l'IA par détection de voix, c'est pour quoi le style est en ligne(inline style)
function Signin() {
	const navigate = useNavigate();
	const { theme } = useContext(DarkModeContext);
	// Ici on récupère le dispatch du hook useReducer User pour envoyer définir une action à effectuer dans le reducer les données de l'utilisateur
	const { dispatch } = useContext(UserContext);

	function submitHandler(e) {
		e.preventDefault();
		dispatch({
			type: "LOGIN",
			payload: e.target.username.value ,
		});
		// redirection vers la page d'accueil
		navigate("/");
	}
	return (
		<main className={theme}>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					id="username"
					name="username"
					aria-label="username"
					placeholder="Enter your username"
				/>

				<input
					className={theme}
					type="password"
					id="password"
					name="password"
					aria-label="Password"
					placeholder="Enter your password"
				/>
				<button type="submit">Sign In</button>
			</form>
		</main>
	);
}

export default Signin;
