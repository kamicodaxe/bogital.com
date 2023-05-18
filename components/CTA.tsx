import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"

const CTA: React.FC<{}> = ({ }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <div className="w-full bg-yellow">
            <div className="container max-w-7xl flex flex-col flex-wrap content-center justify-center p-4 py-16 mx-auto md:p-10">
                <p className="p-2 text-lg font-medium tracking-wider text-center">
                    {(lang == 'fr' ? "Quel est le coût ?" : "At what cost?")}</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                    {(lang == 'fr' ? "Obtenez un devis gratuit en seulement 24 heures." : "Get a free quote in 24h")}</h2>

                <Link type="button" href='/contact'
                    className="">
                    <button type="button"
                        className="p-2 px-8 flex items-center mx-auto text-lg border-2 rounded text-white border-white hover:bg-teal-500 hover:border-teal-500">
                        {s.quote}
                        <span className=" inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

const strings = {
    'en': {
        freequote: "Free quote",
        quote: "Request now",
    },
    'fr': {
        freequote: "Dévis Gratuit",
        quote: "Demandez un devis",
    }
}

export default CTA