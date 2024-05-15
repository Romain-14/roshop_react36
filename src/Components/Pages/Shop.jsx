import { useContext } from "react";
import products from "../../data/products.json";
import { Link } from "react-router-dom";
import DarkModeContext from "../../store/dark-mode/Context";

function Shop() {
   
	const { theme } = useContext(DarkModeContext);

	return (
		<main className={theme}>
			<section className="wrapper list">
				<h2>Nos nouveaux produits</h2>

				<div>
					{!products ? (
						<p>Chargement en cours...</p>
					) : (
						products.map((product) => (
							<article key={product.id} className="card ctn-1">
								<img
									src={"/images/" +									
                                    product.img_name +
                                    ".jpg"
                                }
									alt={product.label}
								/>
								<h3 className="product-title">
									{product.label}
								</h3>
								<p className="product-price">{product.price}</p>
								<Link
									to={`/product/${product.id}`}
									className="product-detail-link"
								>
									Voir les détails
								</Link>
							</article>
						))
					)}
				</div>
			</section>
		</main>
	);
}

export default Shop;
