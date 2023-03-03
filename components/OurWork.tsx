import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

interface Props {
    locale: string
    title?: string
    isPreview?: boolean,
    projects: {
        title: string,
        desc: string,
        platform: string,
        image: {
            src: string,
            alt: string
        },
        tags: string[]
    }[]
}

const Tick = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
)

const OurWork: React.FC<Props> = ({ locale, title, isPreview, projects }) => {
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])

    return (
        <div className="text-gray-900">
            <div className="section">
                {/* <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
                    <p className="mt-4 text-lg text-gray-600">A non-exhaustive list of Bogital Customers</p>
                </div> */}
                {
                    isPreview ?
                        <h3 className="heading"> {title || "They trusted us - our favorites"} </h3>
                        :
                        <h3 className="text-xl font-extrabold sm:text-2xl">Our favorites</h3>
                }
                <dl className="mt-4 space-y-10 sm:space-y-0 grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {
                        projects.filter(_ => _.platform == "web").map((_customer, i) => {
                            const slug = _customer.title.toLowerCase().split(' ').join('-')
                            return (
                                <Link className="flex" href={`/projects/${slug}`} key={_customer.title}>
                                    <div className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white">
                                        <motion.figure className="flex" layoutId={"image-" + slug}>
                                            <Image src={_customer.image.src} width={420} height={260} className="object-cover" alt={_customer.image.alt} />
                                        </motion.figure>

                                        <div className="ml-2 mt-2">
                                            <motion.dt className="text-lg font-medium" layoutId={"title-" + slug}>
                                                {_customer.title}
                                            </motion.dt>
                                            {/* <dd className="mt-2 text-gray-600">{_customer.desc}</dd> */}
                                        </div>

                                        <motion.div layoutId={`tags-${slug}`} className="flex p-2  mb-8 flex-wrap">
                                            {
                                                _customer.tags.map(_tag => <span key={_tag} className="text-xs tracking-wider uppercase bg-teal-800 text-white p-1 md:p-2 m-1 ">{_tag}</span>)
                                            }
                                        </motion.div>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </dl>

                {
                    !isPreview && (
                        <>
                            <h3 className="text-xl font-extrabold sm:text-2xl">Mobile applications</h3>
                            <dl className="mt-4 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                                {
                                    projects.filter(_ => _.platform == "mobile").map((_customer, i) => {
                                        const slug = _customer.title.toLowerCase().split(' ').join('-')
                                        return (
                                            <Link className="flex" href={`/projects/${slug}`} key={_customer.title}>
                                                <div className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white">
                                                    <motion.figure className="flex" layoutId={"image-" + slug}>
                                                        <Image src={_customer.image.src} width={420} height={260} className="object-cover" alt={_customer.image.alt} />
                                                    </motion.figure>

                                                    <div className="ml-2 mt-2">
                                                        <motion.dt className="text-lg font-medium" layoutId={"title-" + slug}>
                                                            {_customer.title}
                                                        </motion.dt>
                                                        {/* <dd className="mt-2 text-gray-600">{_customer.desc}</dd> */}
                                                    </div>

                                                    <div className="flex p-2  mb-8 flex-wrap">
                                                        {
                                                            _customer.tags.map(_tag => <span key={_tag} className="text-xs tracking-wider uppercase bg-teal-800 text-white p-1 md:p-2 m-1 ">{_tag}</span>)
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </dl>

                        </>
                    )
                }


            </div>
        </div>
    )
}



export default OurWork