import { useMemo } from "react"

interface Props {
    locale: string
}

const JoinNewsLetter: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <div className="w-full bg-coolGray-500 bg-[url('https://source.unsplash.com/LPZy4da9aRo/640x480')] bg-center bg-cover bg-blend-multiply">
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h2 className="text-5xl antialiased font-semibold leading-none text-center text-coolGray-100">Get Our Updates
                </h2>
                <p className="pt-2 pb-8 text-xl antialiased text-center text-coolGray-100">Find out about events and other news
                </p>
                <div className="flex flex-row">
                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                    <button type="button"
                        className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-teal-400 text-coolGray-900">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

const strings = {
    'en': {
    },
    'fr': {
    }
}


export default JoinNewsLetter