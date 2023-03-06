import Link from "next/link"
import { useMemo, useState } from "react"

interface Props {
    active: string
    locale: string
}

const routes = [
    {
        name: "Our Work",
        path: "/projects"
    },
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "School",
        path: "/school"
    },
    {
        name: "Career",
        path: "/career"
    },

]

const NavBar: React.FC<Props> = ({ active, locale }) => {

    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        if (!active) return 'p-2 px-4 border-b-2 border-transparent text-white hover:text-teal-400 hover:border-teal-400'
        const isActive = routeName.toLowerCase().includes(active.toLowerCase())
        // isActive ? alert("Active " + routeName) : alert("Inactive " + routeName)
        if (isActive) return 'p-2 px-4 border-b-2 text-teal-400 border-teal-400'
        return 'p-2 px-4 border-b-2 border-transparent text-white hover:text-teal-400 hover:border-teal-400'
    }

    const isFrench = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const [isActive, setIsAvtice] = useState(false)

    const toggleMenu = () => {
        setIsAvtice(v => !v)
    }

    function showMenu() {
        var dropDown = document.querySelector("#drop-down");
        if (dropDown && dropDown.classList.contains("hidden")) {
            dropDown.classList.remove("hidden")
            return;
        }
    }

    function hideMenu() {
        var dropDown = document.querySelector("#drop-down");
        if (dropDown && !dropDown.classList.contains("hidden")) {
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

    return (
        <div className="w-full fixed z-50">
            <div className="flex relative justify-between h-16 container mx-auto px-4 z-50">

                <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] rounded"></div>
                <Link href="/"
                    className="flex items-center p-2">
                    <span className="flex items-center cursor-pointer z-50">
                        <img src="/images/logo.svg" alt="Bogital logo" srcSet="" className="h-6" />
                    </span>
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex z-50">
                    {
                        routes.map(_page => (
                            <li className="flex items-center cursor-pointer" key={_page.path}>
                                <Link href={_page.path}
                                    className="flex items-center">
                                    <span className={activeLink(_page.path)}>
                                        {_page.name}
                                    </span>
                                </Link>
                            </li>
                        ))
                    }

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex z-50">
                    <button
                        className="self-center px-8 py-3 font-semibold rounded text-white hover:bg-teal-300 bg-teal-400">
                        <Link href="/contact/"
                            className="flex items-center">
                            <span className="">
                                Contact Us
                            </span>
                        </Link>
                    </button>
                    <div className="flex items-center justify-center px-4">
                        <div className="relative inline-block">
                            {/* Dropdown toggle button  */}
                            <button onMouseOver={showMenu} onMouseLeave={hideMenu}
                                className="relative z-50 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Dropdown menu  */}
                            <div id="drop-down"
                                className="absolute right-0 z-20 mt-2 hidden overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
                                <div className="py-2">
                                    <a href="#"
                                        className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                                        <p className="mx-2 text-sm text-gray-600 dark:text-white"><span className="font-bold" />
                                            English
                                        </p>
                                    </a>
                                    <a href="#"
                                        className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">

                                        <p className="mx-2 text-sm text-gray-600 dark:text-white"><span className="font-bold" />
                                            Français
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="p-4 lg:hidden z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

            </div>
        </div>
    )
}

export default NavBar