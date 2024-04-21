// Authorization.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuthState } from "../hooks/use-auth-state";

const Authorization = (WrappedComponent: React.ComponentType) => {
	const AuthorizedComponent = (props: React.ComponentProps<any>) => {
		const navigate = useNavigate();
		const isAuthenticated = false;

		useEffect(() => {
			if (!isAuthenticated) {
				navigate("/");
			}
		}, [isAuthenticated, navigate]);

		// Render the wrapped component only if user is authenticated
		return isAuthenticated ? <WrappedComponent {...props} /> : null;
	};

	return AuthorizedComponent;
};

export default Authorization;
