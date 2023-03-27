import React from "react";
import { NavLink } from "react-router-dom";
import { StyledTitle, StyledContainer } from "../../UI/Variables";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { ReactComponent as User } from "../../Assets/usuario.svg";
import styled from "styled-components";
import { UserContext } from "../../Context/UserContext";

const StyledHeader = styled.header`
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
	position: fixed;
	width: 100%;
	z-index: 100;
	background: white;
	top: 0px;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
`;

const StyledLogo = styled.span`
	padding: 0.5rem 0;
`;

const StyledLogin = styled.span`
	color: #333;
	display: flex;
	align-items: center;
`;

const StyledLoginLogo = styled.span`
	margin-left: 0.5rem;
	top: 2px;
	position: relative;
`;

const Header = () => {
	const context = React.useContext(UserContext);

	return (
		<StyledHeader>
			<StyledContainer>
				<StyledNav>
					<NavLink to="/" aria-label="Dogs - Home">
						<StyledLogo>
							<Dogs />
						</StyledLogo>
					</NavLink>

					<StyledLogin>
						{!context.data && (
							<NavLink to="login">
								Login / Criar
								<StyledLoginLogo>
									<User />
								</StyledLoginLogo>
							</NavLink>
						)}
						{context.data && context.data.username && (
							<NavLink to="login">Meus dados</NavLink>
						)}
					</StyledLogin>
				</StyledNav>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
