import React from "react";
import { UserContext } from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectRouter = ({ children }) => {
	const { isLogged } = React.useContext(UserContext);
	return isLogged ? children : <Navigate to="/login" />;
};

export default ProtectRouter;
