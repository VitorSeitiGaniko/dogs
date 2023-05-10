import React from "react";
import FeedModal from "./FeedModal";
import FeedPhoto from "./FeedPhoto";

const Feed = () => {
	const [modalPhoto, setModalPhoto] = React.useState(null);
	const [pages, setPages] = React.useState([1]);
	const [infinite, setInfinite] = React.useState(true);

	React.useEffect(() => {
		var wait = false;
		function infiniteScroll() {
			if (!infinite) return;

			const scroll = window.scrollY;
			const pageHeight = document.body.offsetHeight - window.innerHeight;

			if (scroll > pageHeight * 0.75 && !wait) {
				setPages((pages) => [...pages, pages.length + 1]);
				wait = true;
				setTimeout(() => {
					wait = false;
				}, 500);
			}
		}

		window.addEventListener("wheel", infiniteScroll);
		window.addEventListener("scroll", infiniteScroll);

		return () => {
			window.removeEventListener("wheel", infiniteScroll);
			window.removeEventListener("scroll", infiniteScroll);
		};
	}, [infinite]);

	return (
		<div>
			{modalPhoto && <FeedModal photo={modalPhoto} />}
			{pages &&
				pages.map((page) => (
					<FeedPhoto
						setModalPhoto={setModalPhoto}
						page={page}
						setInfinite={setInfinite}
					/>
				))}
		</div>
	);
};

export default Feed;
