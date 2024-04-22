// Authorization.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthState } from "@/hooks/use-auth-state";

const Authorization = (WrappedComponent: React.ComponentType) => {
	const AuthorizedComponent = (props: React.ComponentProps<any>) => {
		const navigate = useNavigate();

		const isAuthenticated = useAuthState();

		useEffect(() => {
			if (!isAuthenticated) {
				navigate("/");
			}
		}, [isAuthenticated, navigate]);

		return isAuthenticated ? <WrappedComponent {...props} /> : null;
	};

	return AuthorizedComponent;
};

export default Authorization;
