import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GET_USER, TOKEN_POST } from "../../api";
import { UserContext } from "../../Context/UserContext";
import Error from "../../Helper/Error";
import { StyledButton, StyledInput, StyledLabel } from "../../UI/Variables";

const LoginForm = () => {
	const [username, setUsername] = React.useState();
	const [password, setPassword] = React.useState();

	const { userLogin, error, loading } = React.useContext(UserContext);

	async function getUser(token) {
		//O TOKEN_POST vai pegar esses valores do body e já vai preencher nos options
		const { url, options } = GET_USER(token);

		//Aqui quando é feito o fetch os valores de cima já estão nos options
		const response = await fetch(url, options);

		console.log(response);

		const responseBody = await response.json();

		console.log(responseBody);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			userLogin(username, password);
		} catch (e) {
			console.error(e);
			console.debug("ta dando erro por conta da url errada");
		}
	}

	return (
		<div>
			<section>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<StyledLabel htmlFor="username">Usuario</StyledLabel>
					<StyledInput
						type="text"
						name="username"
						id="username"
						value={username}
						onChange={({ target }) => setUsername(target.value)}
					/>
					<StyledLabel htmlFor="password">Senha</StyledLabel>
					<StyledInput
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>
					{loading ? (
						<StyledButton disabled>Carregando...</StyledButton>
					) : (
						<StyledButton>Entrar</StyledButton>
					)}

					<Error error={error} />
				</form>
				<Link to="/login/perdeu">Perdeu a senha ?</Link>
				<div>
					<h2>Cadastra-se</h2>
					<p>Ainda não possui conta? Cadastre-se no site</p>
					<Link to="/login/criar">Cadastrar</Link>
				</div>
			</section>
		</div>
	);
};

export default LoginForm;
