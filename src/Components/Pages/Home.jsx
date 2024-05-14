import { useContext } from "react";
import DarkModeContext from "../../store/dark-mode/Context";
import products from "../../data/products.json";

const base_url_img = new URL("../../assets/images", import.meta.url).href;

function Home() {
    const {theme} = useContext(DarkModeContext);

	return (
		<main className={theme}>
			<section className="wrapper">
				<h2>Nos nouveaux produits</h2>

				<div>
					{products.map(
						(product) =>
							product.tag.includes("new") && (
								<div key={product.id} className="card ctn-1">
									<img
										src={
											base_url_img +
											"/" +
											product.img_name +
											".jpg"
										}
										alt="image fictive"
									/>
									<p className="promo-alert">
										<span>-{product.discountedBy}%</span>
										Offre de lancement
									</p>
								</div>
							)
					)}
				</div>
			</section>

			<hr />

			<section className="wrapper">
				<h2>Nos coup de coeur</h2>

				<div>
					{products.map(
						(product) =>
							product.tag.includes("coup-de-coeur") && (
								<div key={product.id} className="card ctn-1">
									<img
										src={
											base_url_img +
											"/" +
											product.img_name +
											".jpg"
										}
										alt="image fictive"
									/>
									<p className="promo-alert">
										<span>-{product.discountedBy}%</span>
										Offre de lancement
									</p>
								</div>
							)
					)}
				</div>
			</section>
		</main>
	);
}

export default Home;
