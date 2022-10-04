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
            <Header locale={locale as string} title="Blog" active='blog' className="bg-[url(https://source.unsplash.com/ip9R11FMbV8/1200x720)]" />
            <section className="py-6 sm:py-12 text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-coolGray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            s.items.map(_item => (
                                <Link key={_item.title} className="flex" href="/blog/article">
                                    <article className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white dark:bg-coolGray-900">
                                        <Link rel="" href="/blog/article" aria-label="Te nulla oportere reprimique his dolorum">
                                            <img alt="" className="object-cover w-full h-52 dark:bg-coolGray-500"
                                                src={_item.image} />
                                        </Link>
                                        <div className="flex flex-col flex-1 p-6">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            <span className="text-xs tracking-wider uppercase dark:text-teal-400">{_item.author}</span>
                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{_item.title}</h3>
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400">
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

            <div className="flex justify-center space-x-1 dark:text-coolGray-100">
                <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-coolGray-900 dark:border-coolGray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-coolGray-900 text-teal-400 border-teal-400">1</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-coolGray-900 dark:border-coolGray-800" title="Page 2">2</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-coolGray-900 dark:border-coolGray-800" title="Page 3">3</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-coolGray-900 dark:border-coolGray-800" title="Page 4">4</button>
                <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-coolGray-900 dark:border-coolGray-800">
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
        title: "Blog",
        desc: "Bogital Blog - Latest Tech news in Africa",
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