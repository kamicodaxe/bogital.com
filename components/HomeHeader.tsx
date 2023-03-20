import Link from "next/link"
import { useMemo } from "react"
import NavBar from "./NavBar"
import Typical from "./Typical"


interface Props {
    active: string
    locale: string
}

const HomeHeader: React.FC<Props> = ({ active, locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    const hiring = false

    return (
        <header className="bg-cover bg-coolGray-800 text-coolGray-100  bg-[url(https://source.unsplash.com/UVMPVIRCF5w/1280x)] bg-center relative">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>
            <NavBar active={active} locale={locale} />

            <section className="bg-coolGray-800 text-coolGray-100 py-16">
                <div
                    className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">

                    {
                        hiring && (
                            <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full z-10">
                                <Link href='/careers'>
                                    <div className="flex flex-wrap items-center -m-1">
                                        <div className="w-auto p-1"><a className="text-sm" href="" data-config-id="auto-txt-11-1">👋 We are hiring! View open roles</a></div>
                                        <div className="w-auto p-1">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-1">
                                                <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                    <h1 className="text-white text-4xl font-bold leading-none sm:text-5xl z-10"> {s.WeBuild}
                        <span className="text-teal-400">
                            <span> </span>
                            <Typical
                                steps={
                                    lang == "en" ?
                                        ['Websites.', 1500, 'Mobile Applications.', 1500, 'the world.', 1500, 'it with you!', 2500]
                                        :
                                        ['des sites internet.', 1500, 'des applications mobiles.', 1500, 'le monde avec vous.', 5500]
                                }
                                loop={Infinity}
                                wrapper="span"
                            />
                        </span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-white text-lg z-10">
                        {s.assistance}
                    </p>
                    <div className="flex flex-wrap justify-center z-10">
                        <Link href="/contact">
                            <button
                                className="px-8 py-3 m-2 text-lg font-semibold rounded text-white hover:bg-teal-300 bg-teal-400 text-coolGray-900">
                                {s.invoice}
                            </button>
                        </Link>
                        <Link href="/projects">
                            <button
                                className="px-8 py-3 m-2 text-lg border rounded text-white hover:bg-teal-400 hover:border-teal-400 text-coolGray-50 border-coolGray-700">
                                {s.ourWork}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </header>
    )
}

const strings = {
    'en': {
        title: "Project - Article",
        desc: "Bogital Project - Latest Tech news in Africa",
        WeBuild: "We build",
        assistance: "We bring your business to the web",
        invoice: "Request a quote",
        ourWork: "Our work",
    },
    'fr': {
        title: "Project - Article",
        desc: "Bogital Project - Latest Tech news in Africa",
        WeBuild: "Nous concevons ",
        assistance: "Nous vous accompagnons dans la digitalisation de votre activité.",
        invoice: "Demandez un devis",
        ourWork: "Nos projects",
    }
}

export default HomeHeader