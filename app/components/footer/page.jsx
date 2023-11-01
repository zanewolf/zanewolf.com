import {quickLinks} from "@/app/data/quickLinks";
import {socialItems} from "@/app/data/socialItems";
import Link from "next/link";
import {AiOutlineInstagram} from "react-icons/ai";
import {FiGithub} from "react-icons/fi";

export default function Footer() {
	return (
			<section className={'footer'}>
				<div className="footerContent">
					<div className="footerSection">
						<h2>More to Explore</h2>
						<div className="quickLinks">
							{quickLinks.map((d,i)=>{
								return (
										<Link key={i} href={d.path}>{d.name}</Link>
								)
							})}
						</div>
					</div>
					<div className="footerSection connect">
						<h2>Let's Connect</h2>
						<div className="connectApps">
							{socialItems.map((d,i)=>{
								return (
										<a
												key={i}
												href={d.path}
												target={"_blank"}
												referrer={'noreferrer'}
										>
											{d.icon}
										</a>
								)
							})}
						</div>
					</div>
				</div>

				<p className={'copyright'}>Copyright 2023 Zane Wolf</p>

			</section>
	)
}
