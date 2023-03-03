import { useRouter } from "next/router"
import { useMemo } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import OurWork from "../../components/OurWork"

interface Props {
    projects: any[]
}

const Projects: React.FC<Props> = ({ projects }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc}>
            <Header locale={locale as string} title="Projects" active='projects' className="bg-[url(https://source.unsplash.com/2zDXqgTzEFE/1200x720)]" />
            <OurWork locale={locale as string} projects={projects} />
        </Layout>
    )
}

const strings = {
    'en': {
        title: "Projects",
        desc: "Bogital Projects - Latest Tech news in Africa",
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
        title: "Projects",
        desc: "Bogital Projects - Latest Tech news in Africa",
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

export const projects = [
    {
        title: "Bikoula Complexe",
        desc: "Librarie",
        platform: "web",
        image: {
            src: '/images/our-work/bikoulacomplexe.jpg',
            alt: ''
        },
        tags: ["Web", 'Tailwind CSS', 'Next JS', 'Node JS']
    },
    {
        title: "Les Artisans d'ici (Côte d'ivoire)",
        desc: "Restaurant",
        platform: "web",
        image: {
            src: '/images/our-work/artisansdici.jpg',
            alt: ''
        },
        tags: ["Web", 'Tailwind CSS', 'Next JS']
    },
    {
        title: "Fenassco Ligue A, en partenariat avec 3CM Cameroun",
        desc: "Parfumerie",
        platform: "web",
        image: {
            src: '/images/our-work/fenassco-ligue-a.jpg',
            alt: ''
        },
        tags: ["Web", 'Tailwind CSS', 'Next JS', 'Dato CMS']
    },
    {
        title: "Save App",
        desc: "Bazar",
        platform: "web",
        image: {
            src: '/images/our-work/saveapp.jpg',
            alt: ''
        },
        tags: ["Web", 'CSS 3', 'AWS', 'Amplify']
    },

    {
        title: "Gesmax",
        desc: "Librarie",
        platform: "mobile",
        image: {
            src: '/images/our-work/gesmax.jpg',
            alt: ''
        },
        tags: ["React Native", "Firebase", "Golang", "Node JS"]
    },
    {
        title: "Save App",
        desc: "Bazar",
        platform: "mobile",
        image: {
            src: '/images/our-work/saveapp.jpg',
            alt: ''
        },
        tags: ["React Native", "Django", "Node JS"]
    },

]

export async function getStaticProps() {
    return {
        props: {
            projects: projects,
            revalidate: 0
        }
    }
}

export default Projects