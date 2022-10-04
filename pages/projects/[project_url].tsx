import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"

interface Props {

}

const Project: React.FC<Props> = ({ }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc} hideFooter>

            <section className="w-full flex sm:px-12 text-gray-800">

                <article className="flex flex-1 flex-col cursor-pointer hover:bg-teal-400 hover:text-white dark:bg-coolGray-900">
                    <span aria-label="Te nulla oportere reprimique his dolorum">
                        <motion.img
                            alt="" className="object-cover w-full h-52 dark:bg-coolGray-500"
                            src="https://source.unsplash.com/200x200/?techology?1"
                            layoutId="image0"
                        />
                    </span>
                    <div className="flex flex-col flex-1 p-6">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                        <span className="text-xs tracking-wider uppercase dark:text-teal-400">Bogiatl</span>
                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly.</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-coolGray-400">
                            <span>June 3, 2020</span>
                            <span>24k views</span>
                        </div>
                    </div>
                </article>

                <div className="flex flex-1 flex-col space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm dark:text-coolGray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>

                <Link href="/projects">
                    <p className="text-2xl p-4 text-teal-400 cursor-pointer">X</p>
                </Link>

            </section>

        </Layout>
    )
}


const strings = {
    'en': {
        title: "Project - Article",
        desc: "Bogital Project - Latest Tech news in Africa",
        article: {
            title: "How much will it cost me?",
            author: "Bogital",
            image: "https://source.unsplash.com/200x200/?techology?1",
            date: "June 3, 2020",
            views: "2.4k",
            body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
        }
    },
    'fr': {
        title: "Project - Article",
        desc: "Bogital Project - Latest Tech news in Africa",
        article: {
            title: "How much will it cost me?",
            author: "Bogital",
            image: "https://source.unsplash.com/200x200/?techology?1",
            date: "June 3, 2020",
            views: "2.4k",
            body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
        }
    }
}


export default Project