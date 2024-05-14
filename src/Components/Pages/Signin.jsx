import { useContext } from "react";
import DarkModeContext from "../../store/dark-mode/Context";


// Ce composant a été généré par l'IA par détection de voix, c'est pour quoi le style est en ligne(inline style)
function Signin() {

	const { theme } = useContext(DarkModeContext);

	return (
		<main className={theme}>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					aria-label="Email"
					placeholder="Enter your email"
				/>
				<label htmlFor="password">Password:</label>
				<input
                    className={theme}
                    type="password"
					id="password"
					name="password"
					aria-label="Password"
					placeholder="Enter your password"
				/>
				<button
					type="submit"
					style={{
						backgroundColor: "steelblue",
						color: "white",
						padding: "10px 20px",
						fontSize: "16px",
						borderRadius: "5px",
						marginTop: "10px",
					}}
				>
					Sign In
				</button>
			</form>
		</main>
	);
}

export default Signin;
