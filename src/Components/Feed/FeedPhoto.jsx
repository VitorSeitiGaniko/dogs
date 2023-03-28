import React from "react";
import { GET_PHOTOS } from "../../api";
import FeedPhotoItem from "./FeedPhotoItem";

const FeedPhoto = () => {
	const [data, setData] = React.useState();

	React.useEffect(() => {
		async function fetchPhotos() {
			const { url, options } = GET_PHOTOS({ page: 1, total: 6, user: 0 });

			const response = await fetch(url, options);
			console.log(response);
			const responseBody = await response.json();
			console.log(responseBody);
			setData(responseBody);
		}
		fetchPhotos();
	}, []);

	return (
		<div>
			{data.map((photo) => (
				<FeedPhotoItem photo={photo} />
			))}
		</div>
	);
};

export default FeedPhoto;
