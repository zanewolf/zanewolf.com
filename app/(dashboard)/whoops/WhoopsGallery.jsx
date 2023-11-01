"use client"
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";

export default function WhoopsGallery({images}) {
	const [index, setIndex] = useState(-1);
	const handleClick = (number) => setIndex(number);

	return (
			<div className={'whoopsGallery m-4'}>
				<Gallery
						images={images}
						onClick={handleClick}
						enableImageSelection={false}
						rowHeight={400}
						margin={6}
				/>
				{/*<Lightbox*/}
				{/*		slides={images}*/}
				{/*		open={index >= 0}*/}
				{/*		index={index}*/}
				{/*		close={() => setIndex(-1)}*/}
				{/*/>*/}

			</div>
	);
}
