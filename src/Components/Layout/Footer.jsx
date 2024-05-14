import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<footer>
			<aside>
				<a
					href="https://www.facebook.com"
					title="aller vers la page facebook de Roshop"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a
					href="https://www.twitter.com"
					title="aller vers la page twitter de Roshop"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					href="https://www.instagram.com"
					title="aller vers la page instagram de Roshop"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</aside>

			<nav>
				<Link
					to="/mentions-legales"
					title="aller vers la page des mentions légales"
				>
					Mentions légales
				</Link>
				<Link
					to="/contact"
					title="aller vers la page de contact"
				>
					Contact
				</Link>
				<Link
					to="/faq"
					title="aller vers la page des questions fréquentes"
				>
					FAQ
				</Link>
				<Link
					to="/cgv"
					title="aller vers les conditions générales de vente"
				>
					CGV
				</Link>
			</nav>

			<p>&copy; 2024 - Romain Fournier pour la 3WA</p>
		</footer>
	);
}

export default Footer;
