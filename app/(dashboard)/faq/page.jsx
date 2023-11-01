"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
import {faqs} from "@/app/data/faqs";
import styles from '../../styles/faqs.module.css';
import {Tabs, Tab,Card, CardBody} from "@nextui-org/react";

export default function FAQ() {
	const defaultContent =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


	return (
			<section className={styles.faqpage}>
				<div className={styles.header}>frequently asked <span className={styles.accent}>questions</span></div>
				<div className={styles.text}><p>Want to get to know me a bit more? You've come to the right place!</p></div>
				<div className={styles.faqs}>
					<Tabs
							aria-label="Dynamic tabs"
							variant={'underlined'}
							color={"default"}
							size={"lg"}
							classNames={{
								tabList: "gap-6 w-full m-auto rounded-lg p-0 border-b",
								cursor: "w-full bg-[#22d3ee]",
								tab: "max-w-fit px-0 h-12",
								tabContent: "group-data-[selected=true]:border-b-2 border-[#06b6d4]"
							}}
					>
						<Tab key="personal" title="Personal">
							<Card>
								<CardBody>
										<Accordion
												selectionMode={"multiple"}
												variant={"light"}
												className={styles.questions}
										>
											{faqs.filter((d,i)=>{return d.category === 'personal'}).map((d,i)=>{
												return (
														<AccordionItem
																key={i}
																aria-label={`Personal FAQ ${i}`}
																title={d.question}
														>
															<span className={styles.answers}> {d.answer}</span>
														</AccordionItem>
												)
											})}
										</Accordion>
								</CardBody>
							</Card>
						</Tab>
						<Tab key="professional" title="Professional">
							<Card>
								<CardBody>
										<Accordion
												selectionMode={"multiple"}
												variant={"light"}
												className={styles.questions}
										>
											{faqs.filter((d,i)=>{return d.category === 'professional'}).map((d,i)=>{
												return (
														<AccordionItem
																key={i}
																aria-label={`Professional FAQ ${i}`}
																title={d.question}
														>
															<span className={styles.answers}> {d.answer}</span>
														</AccordionItem>
												)
											})}
										</Accordion>
								</CardBody>
							</Card>
						</Tab>
					</Tabs>
				</div>
				{/*<div className={styles.faqs}>*/}
				{/*	<Accordion*/}
				{/*			selectionMode={"multiple"}*/}
				{/*			variant={"light"}*/}
				{/*	>*/}
				{/*		{faqs.map((d,i)=>{*/}
				{/*			return (*/}
				{/*					<AccordionItem key={i} aria-label="Accordion 1" title={d.question}>*/}
				{/*						{d.answer}*/}
				{/*					</AccordionItem>*/}
				{/*			)*/}
				{/*		})}*/}
				{/*	</Accordion>*/}

					{/*<Accordion>*/}
					{/*	<AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">*/}
					{/*		{defaultContent}*/}
					{/*	</AccordionItem>*/}
					{/*	<AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">*/}
					{/*		{defaultContent}*/}
					{/*	</AccordionItem>*/}
					{/*	<AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">*/}
					{/*		{defaultContent}*/}
					{/*	</AccordionItem>*/}
					{/*</Accordion>*/}
				{/*</div>*/}
			</section>



	)
}
