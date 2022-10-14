import Link from "next/link"
import { useMemo } from "react"
import { motion } from "framer-motion"


interface Props {
    locale: string
}

const BlogPreview: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="py-6 sm:py-12 text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-coolGray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        s.items.map(_item => (
                            <Link key={_item.title} className="flex cursor-pointer" href="/blog/article">
                                <article className="flex flex-col hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                    <Link rel="" href="/blog/article" aria-label="Te nulla oportere reprimique his dolorum">
                                        <motion.img
                                            alt="" className="object-cover w-full h-52 bg-coolGray-500"
                                            src={_item.image}
                                            layoutId="image"
                                        />
                                        {/* <img alt="" className="object-cover w-full h-52 bg-coolGray-500"
                                            src={_item.image} /> */}
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
    )
}


const strings = {
    'en': {
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
            }
        ]
    },
    'fr': {
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
            }
        ]
    }
}


export default BlogPreview