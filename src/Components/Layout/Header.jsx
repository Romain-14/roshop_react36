import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import DarkModeContext from "../../store/dark-mode/Context";
import UserContext from "../../store/user/Context";

import "./header.scss";
import logo from "./roshop.png";

function Header() {
	const { theme, isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
	const { user, dispatch } = useContext(UserContext);

	function toggleDarkMode() {
		setIsDarkMode(!isDarkMode);
	}

	return (
		<header className={theme}>
			<h1>
				<Link to="/" title="aller vers la page d'accueil">
					<img
						src={logo}
						alt="Logo du site, un caddy de couleur grise avec un etiquette orange derrière et le nom de la boutique en orange"
					/>
				</Link>
			</h1>

			<p>Bienvenue, {user.username} !</p>
            
			<button
				onClick={toggleDarkMode}
				className={"toggle-dark-mode " + theme + "-theme"}
			>
				{isDarkMode ? (
					<FontAwesomeIcon icon={faSun} />
				) : (
					<FontAwesomeIcon icon={faMoon} />
				)}
			</button>

			<nav>
				<NavLink to="/shop" title="aller vers la boutique">
					Boutique
				</NavLink>
				{!user.isLogged ? (
					<NavLink
						to="/auth/signin"
						title="aller vers la page de connexion"
					>
						Connexion
					</NavLink>
				) : (
					<>
						<NavLink
							to="/auth/profile"
							title="aller vers la page de profil"
						>
							Profil
						</NavLink>
						<button
							onClick={() =>
								dispatch({
									type: "LOGOUT",
								})
							}
						>
							Déconnexion
						</button>
					</>
				)}
			</nav>

			<form>
				<input
					type="search"
					name="search"
					placeholder="Rechercher un produit ?"
					aria-label="Rechercher un produit"
				/>
			</form>
		</header>
	);
}

export default Header;
