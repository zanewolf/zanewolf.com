"use client"
import React from 'react';
import Image from "next/image";
// import profile from '../public/Arcadia_Shots-5-2.jpg'
import profile from '../../../public/images/Profile_Hex.png'
import hex from '../../../public/images/hex_1.png'
import hex2 from '../../../public/images/Untitled.svg'
// import {Parallax} from "react-scroll-parallax";
import Link from "next/link";
import styles from '../../styles/aboutMe.module.css'




About.title= "About Me"
About.keywords = "about"

// export async function getStaticProps() {
//
// 	let content = fetchMedia('cvData')
// 			.then((projectsFetched) => projectsFetched)
// 			.catch((error) => console.log(error))
//
// 	return content
// }

export default function About(){
	// const [cvToggle,setCvToggle]=React.useState(true)




	return (
			<div className={styles.aboutPage}>
				<div className={styles.aboutDiv}>
					<div className={styles.aboutHexContainer}>
						<div className={styles.auxHex}>
							<Link href={'/faq'}>
								<Image
										src={hex2}
										alt={'Hexagon svg with easter egg link to FAQ page'}
								/>
							</Link>
						</div >
						<div className={styles.profileHex}>
							<Image
									className={'aboutImage object-cover'}
									src={profile}
									alt={'profile picture of Zane Wolf'}
									priority={true}
									loading={'eager'}
							/>
						</div>
						<div className={styles.auxHex1}>
							<Link href={'https://scholar.google.com/citations?user=y16qFdcAAAAJ&hl=en'}>
								<Image
										src={hex2}
										alt={'Hexagon svg with easter egg link to google scholars'}
								/>
								{/*<polygon fill="lime" stroke="blue" stroke-width="10"*/}
								{/*				 points="850,75  958,137.5 958,262.5*/}
                {/*    850,325 742,262.6 742,137.5" />*/}
							</Link>
						</div>
					</div>
					<div className={styles.aboutContent}>
						<div className={styles.aboutText}>
							I am passionate about <span className={'font-bold text-secondary-500'}>sharing what I love and learn</span> with others, whether it's <span className={'font-bold text-secondary-400'}>teaching </span> science classes, <span className={'font-bold text-secondary-200'}>designing </span> data visualizations, <span className={'font-bold text-secondary-300'}>coding </span> useful websites and writing educational content, or even taking my friends rock climbing and throwing them off the cliff (they're tied to ropes, I promise).
						</div>
						{/*<div className={styles.docLinks}>*/}
							<div>I am currently open for work or collaborations.</div>
							<div>Check out my <Link href={'/Wolf_Resume_9.2023.pdf'} className={'underline decoration-primary-200'}>Resume</Link>. </div>
						{/*</div>*/}

					</div>
				</div>
			</div>
	);
};
