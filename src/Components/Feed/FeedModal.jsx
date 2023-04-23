import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import { GET_PHOTO } from "../../api";
import FeedModalComments from "./FeedModalComments";
import { UserContext } from "../../Context/UserContext";

const FeedModal = ({ photo }) => {
	const [data, setData] = React.useState();
	const context = React.useContext(UserContext);

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
			{/* {data && 
				<ul>
				{data.comments.map((comment) => <li><strong>{comment.comment_content}</strong></li>)}				
			</ul>} */}
			
			{context.isLogged && data && <FeedModalComments id={data.photo.id} comments={data.comments}/>}
			
		</div>

		// <div>{data && <img src={data.photo.src} alt={data.photo.title} />}</div>
	);
};

export default FeedModal;
