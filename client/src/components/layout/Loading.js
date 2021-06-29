import React from "react";
import loading from "../../img/loading.gif";

const Loading = () => {
	return (
		<>
			<img
				src={loading}
				alt="Preloader"
				style={{ width: "250px", margin: "auto", display: "block" }}
			/>
		</>
	);
};

export default Loading;
