import React from "react";

const useIsMobile = (media) => {
	const [match, setMatch] = React.useState();

	React.useEffect(() => {
		function changeMatch() {
			const { matches } = window.matchMedia(media);
			setMatch(matches);
		}
		changeMatch();
		window.addEventListener("resize", changeMatch);
		return () => {
			window.removeEventListener("resize", changeMatch);
		};
	}, [media]);

	return match;
};

export default useIsMobile;
