import React from "react";
import { DELETE_PHOTO } from "../../api";

const FeedPhotoDelete = ({ id }) => {
	async function handleClick() {
		console.log(id);
		const { url, options } = DELETE_PHOTO(id);

		const response = await fetch(url, options);
		console.log(response);
		if (response.ok) window.location.reload();
	}

	return (
		<div>
			<button onClick={handleClick}>Deletar</button>
		</div>
	);
};

export default FeedPhotoDelete;
