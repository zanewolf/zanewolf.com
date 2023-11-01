"use client"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import slugify from 'slugify'
import Link from 'next/link'

function getPlainTextFromHeader(contentNode) {
	return contentNode[0].value.replace(/ +/g, '-')

}

function getHeadersFromRichText(richText) {
	const headers = (content) => content.nodeType === BLOCKS.HEADING_2 || content.nodeType  === BLOCKS.HEADING_3
	// console.log('content',content)

	return richText.filter(headers).map((heading) => {
		const plainText = getPlainTextFromHeader(heading.content)
		const nodeType = heading.nodeType

		return {
			id: plainText,
			text: heading.content[0].value,
			href: `#${slugify(plainText)}`,
			className: `hover:underline ${heading.nodeType==='heading-2'? 'text-lg' : 'text-base pl-4'}`
		}
	})
}

export default function TableOfContents({ post,accentColor }) {
	return (
			<div>
				<h4 className={`text-center text-xl font-bold m-auto underline pb-4 `}>Table of Contents</h4>
				<ol>
					{getHeadersFromRichText(post.content).map((item, i) => {
							return (<li key={i}>
								<Link
										href={item.href}
										className={item.className}
										onClick={(e) => {
											e.preventDefault();
											document.querySelector(`#${item.id}`).scrollIntoView({
												behavior: "smooth"
											});
										}}
								>
									{item.text}
								</Link>
							</li>)}
					)}
				</ol>
			</div>
	)
}
