import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import { GET_PHOTO } from "../../api";

const FeedModal = ({ photo }) => {
	const [data, setData] = React.useState();

	React.useEffect(() => {
		async function getPhoto() {
			const { url, options } = GET_PHOTO(photo.id);

			const response = await fetch(url, options);
			console.log("TESTEEEEE", response);
			const responseBody = await response.json();
			console.log(responseBody);
			setData(responseBody);
		}
		getPhoto();
	}, [photo]);
	return (
		<div>
			{data && <img src={data.photo.src} alt={data.photo.title} />}
			{data && <p>{data.photo.author}</p>}
			{data && <p>{data.photo.title}</p>}
			{data && <p>{data.photo.idade}</p>}
		</div>

		// <div>{data && <img src={data.photo.src} alt={data.photo.title} />}</div>
	);
};

export default FeedModal;
