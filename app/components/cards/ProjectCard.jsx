import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/projectCard.module.css'

const categorieColors={
	'All':'primary',
	'Data Visualization':'secondary-200',
	'Website Development':'secondary-300',
	'Science':'secondary-400'
}

export default function ProjectCard({ project}) {
	const { name, slug, thumbnail,tools } = project.fields


	// console.log('hi')
	return (
			<div className={styles.card}>

				<Link href={'/projects/' + slug}>
					{/*<a>*/}
						<div className={styles.featured}>
							<Image
									src={'https:' + thumbnail.fields.file.url}
									fill
									alt={'project-image-'+name}
									blurDataURL={`https://${thumbnail.fields.file.url}?q=${10}`}
									placeholder="blur"
									className={'object-cover'}
							/>
						</div>
						<div className={styles.cardContent}>
							<div className="info p-2">
								<div className={styles.cardName}>{ name }</div>
								<div className={'text-md lg:text-xl font-normal'}>{project.fields.categories}</div>
								<div className={'pt-1 absolute bottom-1 gap-y-1 flex flex-row flex-wrap flex-grow-1'}>
									{tools?.map((tool,i)=> <p key={i} className={`${styles.cardTools} text-${categorieColors[project.fields.categories]}`}>{tool}</p>)}
								</div>

							</div>
						</div>

					{/*</a>*/}
				</Link>

				<style jsx>{`
              .card {
                //transform: rotateZ(-1deg);
                //position: relative;
                color: #000;
                //-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

              }

              .card-content {
                background: #fff;
                box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);

              }

              .info h4 {
                margin: 4px 0;
                text-transform: uppercase;
              }
            `}</style>

			</div>
	)
}