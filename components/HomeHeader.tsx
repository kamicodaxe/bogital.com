import { useMemo, useState } from "react"
import NavBar from "./NavBar"
import Typical from "./Typical"


interface Props {
    active: string
    locale: string
}

const HomeHeader: React.FC<Props> = ({ active, locale }) => {
    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        if (!active) return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer'
        const isActive = active.toLowerCase().includes(routeName.toLowerCase())
        if (isActive) return 'flex cursor-pointer items-center px-4 -mb-1 border-b-2 link-active'
        return 'flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-primary transition-colors cursor-pointer'
    }

    const isFrench = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const [isActive, setIsAvtice] = useState(false)

    const toggleMenu = () => {
        setIsAvtice(v => !v)
    }


    // <li className={activeLink('pricing')}>
    //     <Link href='/pricing' className="flex items-center -mb-1">
    //         <span className="">
    //             {isFrench ? 'Coûts' : 'Pricing'}
    //         </span>
    //     </Link>
    // </li>

    return (
        <header className="bg-cover bg-coolGray-800 text-coolGray-100  bg-[url(https://source.unsplash.com/UVMPVIRCF5w/1280x)] bg-center relative">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>
            <NavBar active={active} locale={locale} />

            <section className="bg-coolGray-800 text-coolGray-100 py-16">
                <div
                    className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-6xl">
                    <h1 className="text-white text-4xl font-bold leading-none sm:text-5xl z-10">We build
                        <span className="text-teal-400">
                            <span> </span>
                            <Typical
                                steps={['Websites.', 1500, 'Mobile Applications.', 1500, 'the world.', 1500, 'it for you!', 2500]}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-white text-lg z-10">
                        Nous vous accompagnons dans la digitalisation de votre activité.
                    </p>
                    <div className="flex flex-wrap justify-center z-10">
                        <button
                            className="px-8 py-3 m-2 text-lg font-semibold rounded text-white hover:bg-teal-300 bg-teal-400 text-coolGray-900">
                            Demandez un devis
                        </button>
                        <button
                            className="px-8 py-3 m-2 text-lg border rounded text-white hover:bg-teal-400 hover:border-teal-400 text-coolGray-50 border-coolGray-700">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </section>


        </header>
    )
}

export default HomeHeader