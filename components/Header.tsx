import NavBar from "./NavBar"


interface Props {
    title: string
    active: string
    locale: string
    className?: string
    navBarOnly?: boolean
}

const HomeHeader: React.FC<Props> = ({ active, locale, className, title, navBarOnly }) => {

    // <li className={activeLink('pricing')}>
    //     <Link href='/pricing' className="flex items-center -mb-1">
    //         <span className="">
    //             {isFrench ? 'Coûts' : 'Pricing'}
    //         </span>
    //     </Link>
    // </li>

    const CONTAINER_CLASS_NAME = `bg-cover bg-coolGray-800 text-coolGray-100 bg-center relative `
    return (
        <header className={CONTAINER_CLASS_NAME + (className || '')}>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>
            <NavBar active={active} locale={locale} />
            {
                !navBarOnly && (
                    <section className="bg-coolGray-800 text-coolGray-100">
                        <div
                            className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-7xl">
                            <h1 className="text-4xl font-bold leading-none text-white sm:text-5xl z-10">
                                {title}
                            </h1>
                        </div>
                    </section>
                )
            }

        </header>
    )
}

export default HomeHeader