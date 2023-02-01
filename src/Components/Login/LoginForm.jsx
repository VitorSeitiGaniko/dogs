import React from "react";
import { NavLink } from "react-router-dom";
import { StyledButton, StyledInput, StyledLabel } from "../../UI/Variables";

const LoginForm = () => {
	const [username, setUsername] = React.useState();
	const [password, setPassword] = React.useState();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username,
					password,
				}),
			});

			console.log(response);

			const responseBody = await response.json();

			console.log(responseBody);
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
					<StyledButton>Entrar</StyledButton>
				</form>
			</section>

			<section>
				<NavLink to="create">
					<button>Criar Usuario</button>
				</NavLink>
			</section>
		</div>
	);
};

export default LoginForm;
