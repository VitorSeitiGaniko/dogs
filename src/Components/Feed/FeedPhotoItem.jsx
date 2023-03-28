import React from "react";

const FeedPhotoItem = ({ photo }) => {
	return (
		<div>
			<img src={photo.src} alt="" />
		</div>
	);
};

export default FeedPhotoItem;
