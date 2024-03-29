import { motion } from "framer-motion"
// import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { IProjectDataResponse } from "../lib/graphql"

interface Props {
    locale: string
    title?: string
    isPreview?: boolean,
    projects: IProjectDataResponse[]
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
                        <>
                            {/* <h3 className="heading"> {title || (isFr ? "Ils nous ont fait confiance" : "They trusted us - our favorites")} </h3> */}
                            <p className="p-2 text-lg font-medium tracking-wider text-center">
                                {title || (isFr ? "Nos favoris" : "Our favorites")}</p>
                            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                                {title || (isFr ? "Projets" : "Projects")}</h2>
                        </>
                        :
                        <h3 className="text-xl font-extrabold sm:text-2xl">{""}</h3>
                }
                <dl className="mt-4 space-y-10 sm:space-y-0 grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    {
                        projects?.map((_customer, i) => {
                            return (
                                <Link className="flex" href={`/projects/${_customer.slug}`} key={_customer.slug}>
                                    <div className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white">
                                        <motion.figure className="flex" layoutId={"image-" + _customer.slug}>
                                            <img src={_customer.featuredImage?.node.sourceUrl} width={420} height={260} className="object-cover" alt={_customer.featuredImage?.node.altText} />
                                        </motion.figure>

                                        <div className="ml-2 mt-2">
                                            <motion.dt className="text-lg font-medium" layoutId={"title-" + _customer.slug}>
                                                <h4 className="text-gray-800">{_customer.title}</h4>
                                            </motion.dt>
                                            {/* <dd className="mt-2 text-gray-600">{_customer.desc}</dd> */}
                                        </div>

                                        <motion.div layoutId={`tags-${_customer.slug}`} className="flex p-2  mb-8 flex-wrap">
                                            {
                                                _customer?.tools?.edges.map(_tag => <span key={_tag.node.id} className="text-xs tracking-wider uppercase bg-teal-800 text-white p-1 md:p-2 m-1 ">{_tag.node.name}</span>)
                                            }
                                        </motion.div>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </dl>

                {
                    isPreview && (
                        <Link type="button" href='/projects'
                            className=" py-8">
                            <button type="button"
                                className="p-2 px-8 flex items-center mx-auto text-lg  hover:text-teal-500">
                                {isFr ? "Plus" : "More"}
                                <span className=" inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    )
                }

            </div>
        </div>
    )
}


export default OurWork