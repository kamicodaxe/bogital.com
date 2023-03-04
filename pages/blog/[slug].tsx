import { motion } from "framer-motion"
import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import BlogPreview from "../../components/BlogPreview"
import Header from "../../components/Header"
import Layout from "../../components/Layout"

interface Props {
    article: any,
    slug: string
}

const Blog: React.FC<Props> = ({ article, slug }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc}>
            <Header locale={locale as string} title={article?.title} active='blog' className="bg-[url(https://source.unsplash.com/ip9R11FMbV8/1200x720)]" />
            <section className=" text-gray-800">
                <div className="grid grid-cols-3 relative">

                    <div className=" col-span-3 md:col-span-2  mx-auto">

                        <div className=" max-w-fit mt-10">
                            <div className="flex flex-wrap justify-between text-sm font-bold text-coolGray-400">
                                <span className="">{article?.date}</span>
                                <span className="">{article?.views} views</span>
                            </div>
                            <img
                                className=""
                                {...article.image}
                                layoutId="image"
                            />
                        </div>

                        <div className="prose lg:prose-xl">


                            <p className="">
                                Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                            </p>

                            <p className="">
                                Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                            </p>

                            <motion.img
                                alt="" className="h-52 mx-auto"
                                src="/images/presentation_image.png"
                                layoutId={`image-${slug}`}
                            />

                            <p className="">
                                Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                            </p>

                            <p className="">
                                Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur.
                            </p>

                        </div>

                    </div>

                    <div className="pt-12 hidden md:block space-y-4">
                        {
                            s.items.map(_item => (
                                <Link key={_item.title} href="/blog/article">
                                    <article className="flex cursor-pointer items-center hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                        <Link rel="" href="/blog/article" aria-label="Te nulla oportere reprimique his dolorum">
                                            <img
                                                className="object-cover w-16 h-16 bg-coolGray-500"
                                                {..._item.image}
                                            />
                                        </Link>
                                        <div className="px-2">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            <h6 className=" font-semibold leading-snug text-md">{_item.title}</h6>
                                            {/* <span className="text-xs tracking-wider uppercase text-teal-400">{_item.author}</span> */}
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400">
                                                <span>{_item.date}</span>
                                                <span>{_item.views} views</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))
                        }
                    </div>

                </div>

                <BlogPreview locale={locale as string} />

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

    return {
        props: {
            article: strings.en.items[0],
            slug: context.params?.slug,
            revalidate: 0
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: strings.en.items.map($ => ({ 'params': { slug: $.title.toLowerCase().split(' ').join('-') } })), //OK
        fallback: 'blocking'
    }

}


export default Blog