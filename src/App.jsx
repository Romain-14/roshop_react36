import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Shop from "./Components/Pages/Shop";
import Auth from "./Components/Pages/Signin";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

import NotFound from "./Components/Pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth/signin" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
