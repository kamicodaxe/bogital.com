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
        <Layout locale={locale as string} title={s.title} desc={s.desc}>
            <Header locale={locale as string} title="Project" active='project' className="bg-[url(https://source.unsplash.com/2zDXqgTzEFE/1200x720)]" />
            <section className="py-6 sm:py-12 text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                        <p className="font-serif text-sm dark:text-coolGray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                    </div>

                </div>
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