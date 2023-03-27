import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { ReactComponent as SVGMinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as SVGEstatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as SVGPostarFotos } from "../../Assets/adicionar.svg";
import { ReactComponent as SVGSair } from "../../Assets/sair.svg";
import useIsMobile from "../../Hooks/useIsMobile";

const UserNavHeader = () => {
	const { userLogout } = React.useContext(UserContext);

	const isMobile = useIsMobile("(max-width: 40rem)");
	console.log(isMobile);

	return (
		<nav>
			<NavLink to="/conta">
				<SVGMinhasFotos />
				Minhas fotos
			</NavLink>
			<NavLink to="/conta/estatistica">
				<SVGEstatisticas />
				Estátisticas
			</NavLink>
			<NavLink to="/conta/postar">
				<SVGPostarFotos />
				Postar foto
			</NavLink>
			<button onClick={userLogout}>
				<SVGSair />
				Sair
			</button>
		</nav>
	);
};

export default UserNavHeader;
