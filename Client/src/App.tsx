import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ErrorBoundary from "./components/Wrappers/ErrorBoundary";
import Error from "./components/Error";
import TokenProvider from "./context/TokenProvider";

const Register = lazy(() => import("./pages/Register"));
const Message = lazy(() => import("./pages/Message"));
const RecipePage = lazy(() => import("./pages/Recipe"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
	return (
		<BrowserRouter>
			<Toaster
				toastOptions={{ duration: 3000 }}
				theme="dark"
				position="bottom-center"
				richColors
			/>
			<TokenProvider>
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
								<Suspense fallback={<div>Loading...</div>}>
									<Home />
								</Suspense>
							</ErrorBoundary>
						}
					/>
					<Route
						path="/register"
						element={
							<ErrorBoundary>
								<Suspense fallback={<div>Loading...</div>}>
									<Register />
								</Suspense>
							</ErrorBoundary>
						}
					/>
					<Route
						path="/message"
						element={
							<ErrorBoundary>
								<Suspense fallback={<div>Loading...</div>}>
									<Message />
								</Suspense>
							</ErrorBoundary>
						}
					/>
					<Route
						path="/recipe"
						element={
							<ErrorBoundary>
								<Suspense fallback={<div>Loading...</div>}>
									<RecipePage />
								</Suspense>
							</ErrorBoundary>
						}
					/>
					<Route
						path="/about"
						element={
							<ErrorBoundary>
								<Suspense fallback={<div>Loading...</div>}>
									<About />
								</Suspense>
							</ErrorBoundary>
						}
					/>
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</TokenProvider>
		</BrowserRouter>
	);
}

export default App;
