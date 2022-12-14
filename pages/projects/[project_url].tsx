import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"

interface Props {

}

const Project: React.FC<Props> = ({ }) => {
    const { locale, back } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc} hideFooter>

            <section className="container h-screen flex flex-col lg:flex-row mx-auto text-gray-800">

                <article className="flex flex-col flex-1 bg-coolGray-900">

                    <motion.div layoutId="image0" className="min-h-[8rem] md:min-h-[18rem] w-full bg-gray-300">
                        {/* <Image src="https://source.unsplash.com/random/420x210" width={420} height={210} className="object-cover" /> */}
                        <img
                            alt="" className="object-cover w-full"
                            src="https://source.unsplash.com/random/420x210"
                        />
                    </motion.div>

                    <div className="flex flex-col flex-1 p-4">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}

                        <div className="flex space-x-2">
                            <span className="text-xs tracking-wider uppercase bg-teal-800 text-white p-1 md:p-2">UX</span>
                            <span className="text-xs tracking-wider uppercase bg-teal-800 text-white p-1 md:p-2">UI</span>
                            <span className="text-xs tracking-wider uppercase bg-teal-800 text-white p-1 md:p-2">Next JS</span>
                        </div>

                        <motion.h3 layoutId="bName0" className="flex-1 py-2 text-lg font-semibold leading-snug">Librarie J²</motion.h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400">
                            <span>June 3, 2020</span>
                            <span>24k views</span>
                        </div>
                    </div>

                </article>

                <div className="flex flex-col flex-1 space-y-4 lg:overflow-y-scroll px-4 sm:pr-12">

                    <h2 className="text-3xl font-bold text-center">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-center">Qualisque erroribus usu at, duo te agam soluta mucius.</p>

                    <p className="text-md text-gray-700">
                        Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                    </p>

                    <p className="text-md text-gray-700">
                        Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                    </p>

                    <p className="text-md text-gray-700">
                        Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                    </p>

                    <p className="text-md text-gray-700">
                        Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                    </p>

                    <p className="text-md text-gray-700">
                        Fusce ac egestas diam, tristique lacinia purus. Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex.
                    </p>

                </div>

            </section>

            <button onClick={back} className="fixed top-4 right-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer text-teal-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

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