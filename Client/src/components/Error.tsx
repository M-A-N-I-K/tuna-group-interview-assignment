import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="bg-gray-100">
			<div className="h-screen flex flex-col justify-center items-center">
				<h1 className="text-8xl font-bold text-gray-800">Oops!</h1>
				<p className="text-4xl font-medium text-gray-800">
					Something Went Wrong
				</p>
				<Link to="/" className="mt-4 text-xl text-blue-600 hover:underline">
					Go back home
				</Link>
			</div>
		</div>
	);
};

export default Error;
