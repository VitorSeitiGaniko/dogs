import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
	const { isLogged } = React.useContext(UserContext);

	if (isLogged) return <Navigate to="/conta" />;

	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginForm />}></Route>
				<Route path="create" element={<LoginCreate />}></Route>
				<Route path="lost" element={<LoginPasswordLost />}></Route>
				<Route path="reset" element={<LoginPasswordReset />}></Route>
			</Routes>
		</div>
	);
};

export default Login;
