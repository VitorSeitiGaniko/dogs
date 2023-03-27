import React from "react";
import { useLocation } from "react-router-dom";
import UserNavHeader from "./UserNavHeader";

const UserHeader = () => {
	const [title, setTitle] = React.useState();
	const location = useLocation();

	React.useEffect(() => {
		const { pathname } = location;
		// eslint-disable-next-line default-case
		switch (pathname) {
			case "/conta/postar":
				setTitle("Poste sua foto");
				break;
			case "/conta/estatistica":
				setTitle("Estatísticas");
				break;
			default:
				setTitle("Minha conta");
		}
	}, [location]);

	return (
		<header>
			<h1>{title}</h1>
			<UserNavHeader />
		</header>
	);
};

export default UserHeader;
