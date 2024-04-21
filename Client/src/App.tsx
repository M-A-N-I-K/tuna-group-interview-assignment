import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Message from "./pages/Message";
import RecipePage from "./pages/Recipe";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./components/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<ErrorBoundary>
							<Login />
						</ErrorBoundary>
					}
				/>
				<Route path="/home" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/message" element={<Message />} />
				<Route path="/recipe" element={<RecipePage />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
