import { useContext } from "react";
import DarkModeContext from "../../store/dark-mode/Context";
import products from "../../data/products.json";

function Home() {
    // on récupère le thème actuel en se branchant sur le contexte en utilisant le hook useContext
    // qui prend en paramètre le contexte à utiliser, c'est ce qui va déterminer les données qu'on va pouvoir récupérer
    const { theme } = useContext(DarkModeContext);

	return (
		<main className={theme}> {/* on applique le thème récupéré sur le main (dark ou light*/}
			<section className="wrapper">
				<h2>Nos nouveaux produits</h2>

				<div>
					{products.map(
						(product) =>
							product.tag.includes("new") && (
								<div key={product.id} className="card ctn-1">
									<img
										src={"/images/" +									
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
										src={"/images/" +									
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
