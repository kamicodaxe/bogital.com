import Link from "next/link"
import { useMemo, useState } from "react"
import NavBar from "./NavBar"


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
        <header className="p-4 bg-cover dark:bg-coolGray-800 dark:text-coolGray-100  bg-[url(https://source.unsplash.com/UVMPVIRCF5w/1280x)] bg-center">
            <NavBar active={active} locale={locale} />

            <section className="dark:bg-coolGray-800 dark:text-coolGray-100 py-16">
                <div
                    className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-white text-4xl font-bold leading-none sm:text-5xl">We built
                        <span className="dark:text-teal-400"> <span> </span>Websites</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-white text-lg bg-gray-700">
                        Nous vous accompagnons dans la digitalisation de votre activité.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button
                            className="px-8 py-3 m-2 text-lg font-semibold rounded text-white hover:bg-teal-300 dark:bg-teal-400 dark:text-coolGray-900">
                            Demandez un devis
                        </button>
                        <button
                            className="px-8 py-3 m-2 text-lg border rounded text-white hover:bg-teal-400 hover:border-teal-400 dark:text-coolGray-50 dark:border-coolGray-700">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </section>

        </header>
    )
}

export default HomeHeader