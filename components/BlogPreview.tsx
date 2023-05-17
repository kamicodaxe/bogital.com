import { motion } from "framer-motion"
import Link from "next/link"
import { useMemo } from "react"
import { IPostDataResponse } from "../lib/graphql"


interface Props {
    locale: string
    articles: IPostDataResponse[]
    isPreview?: boolean
}

function trimString(text: string, len = 64): string {
    if (text.length > 64) {
        return `${text.substring(0, len - 3)}...`;
    } else {
        return text;
    }
}


const BlogPreview: React.FC<Props> = ({ locale, articles, isPreview }) => {
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="py-6 sm:py-12 text-gray-800">
            <div className="container max-w-7xl mx-auto space-y-8">
                {
                    isPreview && (
                        <div className="space-y-2 text-center">
                            <p className="p-2 text-sm font-medium tracking-wider text-center">{s.title}</p>
                            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">{s.subtitle}</h2>
                        </div>
                    )
                }

                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        articles?.map(_item => {
                            return (
                                <Link key={_item.slug} className="flex cursor-pointer" href={`/blog/${_item.slug}`}>
                                    <article className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                        <motion.img
                                            className="object-cover w-full h-52 bg-coolGray-500"
                                            src={_item.featuredImage?.node?.sourceUrl}
                                            layoutId={"image-" + _item.featuredImage?.node?.sourceUrl}
                                        />
                                        {/* <img alt="" className="object-cover w-full h-52 bg-coolGray-500"
                                                src={_item.image} /> */}
                                        <div className="flex flex-col flex-1">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            {/* <span className="text-xs tracking-wider uppercase text-teal-400">{_item.author}</span> */}
                                            <h3 className="py-2 text-lg font-semibold leading-snug">{trimString(_item.title)}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: _item.excerpt }} />
                                            {/* <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400"> */}
                                            {/* <span>{_item.date}</span> */}
                                            {/* <span>{_item.views} views</span> */}
                                            {/* </div> */}
                                        </div>
                                    </article>
                                </Link>
                            )
                        })

                    }
                </div>

                {
                    isPreview && (
                        <Link type="button" href='/blog'
                            className=" py-8">
                            <button type="button"
                                className="p-2 px-8 flex items-center mx-auto text-lg  hover:text-teal-500">
                                {s.more}
                                <span className=" inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    )
                }
            </div>
        </section>
    )
}


const strings = {
    'en': {
        title: 'Any news?',
        subtitle: 'Our Blog',
        more: 'See more'
    },
    'fr': {
        title: 'Des infos?',
        subtitle: 'Articles',
        more: 'plus'
    }
}


export default BlogPreview