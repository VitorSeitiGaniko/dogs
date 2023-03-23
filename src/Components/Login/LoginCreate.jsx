import React, { useState } from "react";
import { POST_USER } from "../../api";
import { StyledButton, StyledInput, StyledLabel } from "../../UI/Variables";

const LoginCreate = () => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	function handleSubmit(event) {
		event.preventDefault();
		const { url, options } = POST_USER();
	}

	return (
		<section>
			<h1>Cadastre-se</h1>
			<form onSubmit={handleSubmit}>
				<StyledLabel htmlFor="email">Email</StyledLabel>
				<StyledInput
					type="text"
					name="email"
					id="email"
					value={email}
					onChange={({ target }) => setEmail(target.value)}
				/>
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
				<button>Cadastrar</button>
			</form>
		</section>
	);
};

export default LoginCreate;
