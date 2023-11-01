import {fetchMedia} from "@/app/utils/ContentfulAPI";
import Image from "next/image";
import Loading from "@/app/(dashboard)/Loading";
import WhoopsGallery from "@/app/(dashboard)/whoops/WhoopsGallery";
import {Suspense} from "react";

export default async function Whoops() {
	const content = await fetchMedia({content_type: 'mistakes', order:'-sys.createdAt'})

	const images = content.map((d,i)=>{
		return {
			src: 'https:'+d.fields.media.fields.file.url,
			width: d.fields.media.fields.file.details.image.width,
			height: d.fields.media.fields.file.details.image.height,
			customOverlay: (
					<div className="custom-overlay__caption text-white font-bold bg-black bg-opacity-70 flex flex-col flex-nowrap h-full w-full text-center pt-20 px-2 justify-items-center">
						<div className={'text-2xl'}>{d.fields.project}</div>
						<hr/>
						<p className={'text-lg'}>{d.fields.description}</p>
					</div>
			),
		}
	})

	return (
			<div className={'flex flex-col flex-nowrap justify-center relative mt-24'}>
				<div className=" text-3xl p-4 m-auto">gallery of <span className={'font-bold text-secondary-200'}>whoops</span></div>
				<div className=" text-lg p-12 m-auto font-light text-center flex">I feel like dataviz aspires to be an exact science, with everything in its place. But in the process of reaching that goal....things will very much be out of place. </div>
				<Suspense fallback={<Loading />}>
					<WhoopsGallery images={images}/>
				</Suspense>
			</div>
	)
}
