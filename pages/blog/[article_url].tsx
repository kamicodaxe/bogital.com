import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"

interface Props {

}

const Blog: React.FC<Props> = ({ }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc}>
            <Header locale={locale as string} title="Partem reprimique an pro" active='blog' className="bg-[url(https://source.unsplash.com/ip9R11FMbV8/1200x720)]" />
            <section className=" text-gray-800">
                <div className="grid grid-cols-3 relative">
                    <div className="prose col-span-3 md:col-span-2 lg:prose-xl mx-auto">

                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                            <p className="font-serif text-sm text-coolGray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                        </div>


                        <div className="">

                            <motion.img
                                alt="Article main image" className="h-52 mx-auto"
                                src="https://source.unsplash.com/600x300/?techology?1"
                                layoutId="image"
                            />

                            <p className="">
                                Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                            </p>

                            <p className="">
                                Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                            </p>

                            <motion.img
                                alt="" className="h-52 mx-auto"
                                src="/images/presentation_image.png"
                                layoutId="image"
                            />

                            <p className="">
                                Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                            </p>

                            <p className="">
                                Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur.
                            </p>

                        </div>

                    </div>

                    <div className="pt-20 hidden md:block space-y-4">
                        {
                            s.items.map(_item => (
                                <Link key={_item.title} href="/blog/article">
                                    <article className="flex cursor-pointer items-center hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                        <Link rel="" href="/blog/article" aria-label="Te nulla oportere reprimique his dolorum">
                                            <img
                                                alt="" className="object-cover w-16 h-16 bg-coolGray-500"
                                                src={_item.image}
                                            />
                                        </Link>
                                        <div className="p-2">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            <h6 className=" font-semibold leading-snug text-md">{_item.title}</h6>
                                            {/* <span className="text-xs tracking-wider uppercase text-teal-400">{_item.author}</span> */}
                                            {/* <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400">
                                                    <span>{_item.date}</span>
                                                    <span>{_item.views} views</span>
                                                </div> */}
                                        </div>
                                    </article>
                                </Link>
                            ))
                        }
                    </div>

                </div>

                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            s.items.slice(0, 4).map(_item => (
                                <Link key={_item.title} className="flex" href={`/blog/${_item.title.toLowerCase().split(' ').join('-')}`}>
                                    <article className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                        <Link rel="" href={`/blog/${_item.title.toLowerCase().split(' ').join('-')}`} aria-label={_item.title}>
                                            <img
                                                alt="" className="object-cover w-full h-52 bg-coolGray-500"
                                                src={_item.image}
                                            />
                                        </Link>
                                        <div className="flex flex-col flex-1 p-6">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            <span className="text-xs tracking-wider uppercase text-teal-400">{_item.author}</span>
                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{_item.title}</h3>
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
            image: "https://source.unsplash.com/200x200/?techology?1",
            date: "June 3, 2020",
            views: "2.4k",
            body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
        },
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?1",
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            },
            {
                title: "What are the payment terms?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?2",
                date: "June 3, 2020",
                views: "2.4k",
                body: "We expect our clients to buy their domain names and email plus 20 000 FCFA before we start designing. You will pay half of the amount remaining when the web design will be validated.Then complete the payment after project completion."
            },
            {
                title: "What if I don't love your work?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?3",
                date: "June 3, 2020",
                views: "2.4k",
                body: "At Bogital, a project is completed only when the client is satisfied. If you don't love our web design prototype, we will work with you to improve the design until satisfaction."
            },
            {
                title: "How to update my website?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?4",
                date: "June 3, 2020",
                views: "2.4k",
                body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            },
            {
                title: "What if I don't love your work",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?5",
                date: "June 3, 2020",
                views: "2.4k",
                body: "At Bogital, a project is completed only when the client is satisfied. If you don't love our web design prototype, we will work with you to improve the design until satisfaction."
            },
            {
                title: "How to update my website",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?6",
                date: "June 3, 2020",
                views: "2.4k",
                body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            }
        ]
    },
    'fr': {
        title: "Blog - Article",
        desc: "Bogital Blog - Latest Tech news in Africa",
        article: {
            title: "How much will it cost me?",
            author: "Bogital",
            image: "https://source.unsplash.com/200x200/?techology?1",
            date: "June 3, 2020",
            views: "2.4k",
            body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
        },
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?1",
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            },
            {
                title: "What are the payment terms?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?2",
                date: "June 3, 2020",
                views: "2.4k",
                body: "We expect our clients to buy their domain names and email plus 20 000 FCFA before we start designing. You will pay half of the amount remaining when the web design will be validated.Then complete the payment after project completion."
            },
            {
                title: "What if I don't love your work?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?3",
                date: "June 3, 2020",
                views: "2.4k",
                body: "At Bogital, a project is completed only when the client is satisfied. If you don't love our web design prototype, we will work with you to improve the design until satisfaction."
            },
            {
                title: "How to update my website?",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?4",
                date: "June 3, 2020",
                views: "2.4k",
                body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            },
            {
                title: "What if I don't love your work",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?5",
                date: "June 3, 2020",
                views: "2.4k",
                body: "At Bogital, a project is completed only when the client is satisfied. If you don't love our web design prototype, we will work with you to improve the design until satisfaction."
            },
            {
                title: "How to update my website",
                author: "Bogital",
                image: "https://source.unsplash.com/200x200/?techology?6",
                date: "June 3, 2020",
                views: "2.4k",
                body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            }
        ]
    }
}


export default Blog