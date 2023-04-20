import React from "react";

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
	function handleClick() {
		console.log("chamooooou", photo);
		setModalPhoto(photo);
	}

	return (
		<div onClick={handleClick}>
			<img src={photo.src} alt="" />
		</div>
	);
};

export default FeedPhotoItem;
