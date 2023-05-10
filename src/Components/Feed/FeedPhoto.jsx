import React from "react";
import { GET_PHOTOS } from "../../api";
import FeedPhotoItem from "./FeedPhotoItem";

const FeedPhoto = ({ setModalPhoto, page, setInfinite }) => {
	const [data, setData] = React.useState();

	React.useEffect(() => {
		async function fetchPhotos() {
			const total = 2;
			const { url, options } = GET_PHOTOS({ page: page, total: total, user: 0 });

			const response = await fetch(url, options);
			console.log(response);
			const responseBody = await response.json();
			console.log("responseBody  --> ", responseBody.lenght);
			setData(responseBody);
			if (responseBody && responseBody.lenght < total) {
				setInfinite(false);
			}
		}
		fetchPhotos();
	}, []);

	return (
		<div>
			{data &&
				data.map((photo) => <FeedPhotoItem photo={photo} setModalPhoto={setModalPhoto} />)}
		</div>
	);
};

export default FeedPhoto;
