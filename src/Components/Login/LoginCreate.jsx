import React, { useState } from "react";
import { POST_USER } from "../../api";
import { UserContext } from "../../Context/UserContext";
import Error from "../../Helper/Error";
import { StyledButton, StyledInput, StyledLabel } from "../../UI/Variables";

const LoginCreate = () => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const { userLogin } = React.useContext(UserContext);
	const [error, setError] = React.useState()

	async function handleSubmit(event) {
		event.preventDefault();
		const { url, options } = POST_USER({ username, password, email });
		const response = await fetch(url, options);
		console.log(response);
		const responseBody = await response.json();
		console.log(responseBody);

		if (!response.ok){
			setError(responseBody.message)
		}else{
			userLogin(username, password);
		}
		
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
				<Error error={error}/>
			</form>
		</section>
	);
};

export default LoginCreate;
