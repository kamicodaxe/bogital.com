import Link from "next/link"
import { useMemo, useState } from "react"
import NavBar from "./NavBar"


interface Props {
    title: string
    active: string
    locale: string
    className?: string
}

const HomeHeader: React.FC<Props> = ({ active, locale, className, title }) => {
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

    function showMenu() {
        var dropDown = document.querySelector("#drop-down");
        if (dropDown.classList.contains("hidden")) {
            dropDown.classList.remove("hidden")
            return;
        }
    }

    function hideMenu() {
        var dropDown = document.querySelector("#drop-down");
        if (!dropDown.classList.contains("hidden")) {
            dropDown.classList.add("hidden");
            return;
        }
    }

    // <li className={activeLink('pricing')}>
    //     <Link href='/pricing' className="flex items-center -mb-1">
    //         <span className="">
    //             {isFrench ? 'Coûts' : 'Pricing'}
    //         </span>
    //     </Link>
    // </li>

    const CONTAINER_CLASS_NAME = `p-4 bg-cover dark:bg-coolGray-800 dark:text-coolGray-100 bg-center `
    return (
        <header className={CONTAINER_CLASS_NAME + (className || '')}>
            <NavBar active={active} locale={locale} />
            <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
                <div
                    className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        {title}
                    </h1>

                </div>
            </section>

        </header>
    )
}

export default HomeHeader