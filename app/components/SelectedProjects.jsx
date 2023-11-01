import Image from "next/image";
// import SelectedProjectCard from "@/app/components/SelectedProjectCard";

export default function SelectedProjects({selectedProjects}) {
	// console.log(selectedProjects)
	return (
			<>
					{selectedProjects.map((d,i)=>{
						return (
									<div className="projectList">
											<div className=" hexagonGallery mt-2 flex flex-row ">
														<h2>{d.fields.name}</h2>
											</div>
									</div>
						)
					})}
			</>
	)
}
