import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import BlogPreview from "../../components/BlogPreview"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import wordpress from "../../lib/wordpress"
import { IWordpressArticle } from "../../lib/wordpress/types"

interface Props {
    article: IWordpressArticle,
    articles: IWordpressArticle[],
    slug: string
}

const Blog: React.FC<Props> = ({ article, articles, slug }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    // console.log(article)
    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc}>
            <Header locale={locale as string} title={article?.title.rendered} active='blog' className="bg-[url(https://source.unsplash.com/ip9R11FMbV8/1200x720)]" />
            <section className=" text-gray-800">
                <div className="grid grid-cols-3 relative">

                    <div className=" col-span-3 md:col-span-2  mx-auto">

                        <div className=" max-w-fit mt-10">
                            <div className="flex flex-wrap justify-between text-sm font-bold text-coolGray-400">
                                <span className="">{article?.date}</span>
                                {/* <span className="">{article?.views} views</span> */}
                            </div>
                            <img
                                className=""
                                src={article._embedded['wp:featuredmedia'][0].source_url}
                                alt=""
                            // layoutId="image"
                            />
                        </div>

                        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />


                    </div>

                    <div className="pt-12 hidden md:block space-y-4">
                        {
                            articles.map(_item => (
                                <Link key={_item.id} href={`/blog/${_item.slug}`}>
                                    <article className="flex cursor-pointer items-center hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                        <img
                                            className="object-cover w-16 h-16 bg-coolGray-500"
                                            src={_item._embedded['wp:featuredmedia'][0].source_url}
                                            alt=""
                                        />
                                        <div className="px-2">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            <h6 className=" font-semibold leading-snug text-md">{_item.title.rendered}</h6>
                                            {/* <span className="text-xs tracking-wider uppercase text-teal-400">{_item.author}</span> */}
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400">
                                                <span>{_item.date}</span>
                                                {/* <span>{_item.views} views</span> */}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))
                        }
                    </div>

                </div>

                <BlogPreview locale={locale as string} articles={articles} />

            </section>
        </Layout>
    )
}


const strings = {
    'en': {
        title: "Blog - Article",
        desc: "Bogital Blog - Latest Tech news in Africa",
        article: {
            title: "How much will it cost me?",
            author: "Bogital",
            image: {
                src: "/images/blog/why-website.jpg",
                alt: ''
            },
            date: "June 3, 2020",
            views: "2.4k",
            body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
        },
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
            },
        ]
    },
    'fr': {
        title: "Blog - Article",
        desc: "Bogital Blog - Latest Tech news in Africa",
        article: {
            title: "How much will it cost me?",
            author: "Bogital",
            image: {
                src: "/images/blog/why-website.jpg",
                alt: ''
            },
            date: "June 3, 2020",
            views: "2.4k",
            body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
        },
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
            },
            // {
            //     title: "What are the payment terms?",
            //     author: "Bogital",
            //     image: "https://source.unsplash.com/200x200/?techology?2",
            //     date: "June 3, 2020",
            //     views: "2.4k",
            //     body: "We expect our clients to buy their domain names and email plus 20 000 FCFA before we start designing. You will pay half of the amount remaining when the web design will be validated.Then complete the payment after project completion."
            // },
            // {
            //     title: "What if I don't love your work?",
            //     author: "Bogital",
            //     image: "https://source.unsplash.com/200x200/?techology?3",
            //     date: "June 3, 2020",
            //     views: "2.4k",
            //     body: "At Bogital, a project is completed only when the client is satisfied. If you don't love our web design prototype, we will work with you to improve the design until satisfaction."
            // },
            // {
            //     title: "How to update my website?",
            //     author: "Bogital",
            //     image: "https://source.unsplash.com/200x200/?techology?4",
            //     date: "June 3, 2020",
            //     views: "2.4k",
            //     body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            // },
            // {
            //     title: "What if I don't love your work",
            //     author: "Bogital",
            //     image: "https://source.unsplash.com/200x200/?techology?5",
            //     date: "June 3, 2020",
            //     views: "2.4k",
            //     body: "At Bogital, a project is completed only when the client is satisfied. If you don't love our web design prototype, we will work with you to improve the design until satisfaction."
            // },
            // {
            //     title: "How to update my website",
            //     author: "Bogital",
            //     image: "https://source.unsplash.com/200x200/?techology?6",
            //     date: "June 3, 2020",
            //     views: "2.4k",
            //     body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            // }
        ]
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    wordpress.initialiseWordpress()
    const articles = await wordpress.getCollection('posts?_embed') as IWordpressArticle[]
    const data = await wordpress.getCollection(`posts?slug=${context?.params?.slug}&_embed`) as IWordpressArticle[]
    if (data.length > 0) return {
        props: {
            article: data[0],
            articles,
            slug: context.params?.slug,
            revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
        }
    }

    return {
        props: {
            article: strings.en.items[0],
            slug: context.params?.slug,
            revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = await wordpress.getCollection('posts?_embed') as IWordpressArticle[]
    return {
        paths: articles.map($ => ({ 'params': { slug: $.slug } })), //OK
        fallback: 'blocking'
    }

}


export default Blog