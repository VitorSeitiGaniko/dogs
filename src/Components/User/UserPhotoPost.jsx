import React from "react";
import { POST_PHOTO } from "../../api";
import { StyledInput, StyledLabel } from "../../UI/Variables";
import styled from "styled-components";

const StyledPreview = styled.div`
	border-radius: 1rem;
	background-size: cover;
	background-position: center center;

	&::after {
		content: "";
		display: block;
		height: 0px;
		padding-bottom: 100%;
	}
`;

const UserPhotoPost = () => {
	const [nome, setNome] = React.useState();
	const [peso, setPeso] = React.useState();
	const [idade, setIdade] = React.useState();
	const [img, setImg] = React.useState(null);

	async function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData();
		formData.append("img", img.raw);
		formData.append("nome", nome);
		formData.append("peso", peso);
		formData.append("idade", idade);

		const token = localStorage.getItem("TOKEN");

		const { url, options } = POST_PHOTO(formData, token);

		const response = await fetch(url, options);
		console.log(response);
		const responseBody = await response.json();
		console.log(responseBody);
	}

	function handleImageChange({ target }) {
		setImg({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0],
		});
	}

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<StyledLabel htmlFor="nome">Nome</StyledLabel>
				<StyledInput
					type="text"
					name="nome"
					id="nome"
					value={nome}
					onChange={({ target }) => setNome(target.value)}
				/>
				<StyledLabel htmlFor="peso">Peso</StyledLabel>
				<StyledInput
					type="number"
					name="peso"
					id="peso"
					value={peso}
					onChange={({ target }) => setPeso(target.value)}
				/>
				<StyledLabel htmlFor="idade">idade</StyledLabel>
				<StyledInput
					type="number"
					name="idade"
					id="idade"
					value={idade}
					onChange={({ target }) => setIdade(target.value)}
				/>
				<input type="file" name="img" id="img" onChange={handleImageChange} />
				<button>Enviar</button>
			</form>

			<div>
				{img && img.preview && (
					<StyledPreview
						style={{ backgroundImage: `url('${img.preview}')` }}
					></StyledPreview>
				)}
			</div>
		</section>
	);
};

export default UserPhotoPost;
