import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Message from "./pages/Message";
import RecipePage from "./pages/Recipe";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./components/Error";
import { Toaster } from "sonner";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Toaster position="bottom-center" />
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
				<Route
					path="/home"
					element={
						<ErrorBoundary>
							<Home />
						</ErrorBoundary>
					}
				/>
				<Route
					path="/register"
					element={
						<ErrorBoundary>
							<Register />
						</ErrorBoundary>
					}
				/>
				<Route
					path="/message"
					element={
						<ErrorBoundary>
							<Message />
						</ErrorBoundary>
					}
				/>
				<Route
					path="/recipe"
					element={
						<ErrorBoundary>
							<RecipePage />
						</ErrorBoundary>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
