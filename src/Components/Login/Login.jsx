import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
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
