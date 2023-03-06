import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import wordpress from "../../lib/wordpress"
import { IWordpressArticle } from "../../lib/wordpress/types"

interface Props {
    articles: IWordpressArticle[]
}

const Blog: React.FC<Props> = ({ articles }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]
    console.log(articles)

    return (
        <Layout locale={locale as string} title={s?.title} desc={s?.desc}>
            <Header locale={locale as string} title="Blog" active='blog' className="bg-[url(https://source.unsplash.com/ip9R11FMbV8/1200x720)]" />
            <section className="py-6 sm:py-12 text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Actualités, Articles...</h2>
                        <p className="font-serif text-sm text-coolGray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            articles.map(_item => {

                                return (
                                    <Link key={_item.id} className="flex cursor-pointer" href={`/blog/${_item.slug}`}>
                                        <article className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                            <Link rel="" href={`/blog/${_item.slug}`} aria-label={_item.title.rendered}>
                                                <motion.img
                                                    className="object-cover w-full h-52 bg-coolGray-500"
                                                    src={_item._embedded['wp:featuredmedia'][0].source_url}
                                                    layoutId={"image-" + _item.id}
                                                />
                                                {/* <img alt="" className="object-cover w-full h-52 bg-coolGray-500"
                                                src={_item.image} /> */}
                                            </Link>
                                            <div className="flex flex-col flex-1 ">
                                                {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                                <span className="text-xs tracking-wider uppercase text-teal-400 pt-2">{_item._embedded.author[0].name}</span>
                                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{_item.title.rendered}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: _item.excerpt.rendered }} />
                                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400">
                                                    <span>{_item.date}</span>
                                                    {/* <span>{_item.views} views</span> */}
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                )
                            })

                        }
                    </div>
                </div>
            </section>

            <div className="flex justify-center space-x-1 text-coolGray-100">
                <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-coolGray-900 border-coolGray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-coolGray-900 text-teal-400 border-teal-400">1</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-900 border-coolGray-800" title="Page 2">2</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-900 border-coolGray-800" title="Page 3">3</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-900 border-coolGray-800" title="Page 4">4</button>
                <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-coolGray-900 border-coolGray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

        </Layout>
    )
}


const strings = {
    'en': {
        title: "Blog",
        desc: "Bogital Blog - Latest Tech news in Africa",
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: {
                    src: "/images/blog/why-website.jpg",
                    alt: ''
                },
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            }
        ]
    },
    'fr': {
        title: "Blog",
        desc: "Bogital Blog - Latest Tech news in Africa",
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: {
                    src: "/images/blog/why-website.jpg",
                    alt: ''
                },
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            }
        ]
    }
}

export async function getStaticProps() {
    wordpress.initialiseWordpress()
    const data = await wordpress.getCollection('posts?_embed') as IWordpressArticle[]

    return {
        props: {
            articles: data,
            revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
        }
    }

}

export default Blog