import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/hexCard.module.css'


export default function ProjectHexCard({project}) {

	return (
			<div className={`${styles.hex} group`}>
				<Link href={"/projects/"+project.slug} >
					<div className={`${styles.hexImage} drop-shadow-[7px_10px_15px_rgba(0,0,0,0.5)]`}>
						<Image
								src={'https:' + project.thumbnail.fields.file.url}
								className={'object-cover object-top -z-5 group-hover:brightness-50'}
								alt={'project-image-'+project.name}
								fill={true}
								// objectFit={'cover'}
						/>
						<div className={`${styles.hexText} -z-10 group-hover:z-10`}>
							<div className={styles.hexName}>{project.name}</div>
							{/*<hr/>*/}
							<p>{project.categories}</p>
						</div>
					</div>



				</Link>
			</div>
	)
}
