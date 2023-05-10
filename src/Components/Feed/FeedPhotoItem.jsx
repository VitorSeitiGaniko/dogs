import React from "react";

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
	function handleClick() {
		console.log("chamooooou", photo);
		setModalPhoto(photo);
	}

	return (
		<div onClick={handleClick}>
			<img style={{height: 500}} src={photo.src} alt="" />
		</div>
	);
};

export default FeedPhotoItem;
