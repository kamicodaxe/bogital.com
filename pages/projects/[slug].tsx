import { gql } from "@apollo/client"
import { motion } from "framer-motion"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Layout from "../../components/Layout"
import { getApolloClient, IProjectDataResponse } from "../../lib/graphql"

interface Props {
    project: IProjectDataResponse
    slug: string
}

const Project: React.FC<Props> = ({ project, slug }) => {
    const { locale, back } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc} hideFooter>

            <section className="container h-screen flex flex-col lg:flex-row mx-auto text-gray-800">

                <article className="flex flex-col flex-1 bg-coolGray-900">

                    <motion.div layoutId={`image-${slug}`} className="min-h-[8rem] md:min-h-[18rem] w-full bg-gray-300">
                        {/* <Image src="https://source.unsplash.com/random/420x210" width={420} height={210} className="object-cover" /> */}
                        <img
                            className="object-cover w-full"
                            src={project?.featuredImage?.node?.sourceUrl}
                            alt={project?.featuredImage?.node?.altText}
                        />
                    </motion.div>

                    <div className="flex flex-col flex-1 p-4">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}

                        {/* <motion.div layoutId={`tags-${slug}`} className="flex flex-wrap">
                            {
                                project.tags.map(_tag => <span key={_tag} className="text-xs tracking-wider uppercase bg-teal-800 text-white p-1 md:p-2 m-1 ">{_tag}</span>)
                            }
                        </motion.div> */}

                        <motion.h3 layoutId={`title-${slug}`} className="flex-1 py-2 text-lg font-semibold leading-snug">{project?.title}</motion.h3>

                    </div>

                </article>

                <div className="flex flex-col flex-1 space-y-4 lg:overflow-y-scroll px-4 sm:pr-12">

                    <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: project?.content || "" }}>
                        {/* <h2 className="text-3xl font-bold text-center">{project?.title.rendered}</h2> */}
                        {/* <p className="font-serif text-sm text-center">Qualisque erroribus usu at, duo te agam soluta mucius.</p> */}
                        {/* <p className=" text-gray-700">
                            {project?.desc || "Ut ut iaculis nibh. Nulla commodo ante a ipsum accumsan, eu ornare erat rutrum. Pellentesque pellentesque faucibus nunc id pharetra. Vivamus efficitur sit amet turpis et consectetur. Maecenas erat felis, egestas egestas blandit vitae, viverra sed sem. Maecenas viverra mauris nec urna lacinia, a aliquam arcu elementum. Curabitur nec pretium eros. Pellentesque vehicula sollicitudin enim, ac rhoncus lacus ultrices tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque aliquet, orci vel ultricies convallis, dolor ligula euismod eros, quis varius felis lacus ac sapien. Fusce efficitur aliquet ligula, sed commodo felis mattis nec. In hac habitasse platea dictumst. In vel lectus sed lectus convallis tristique et id arcu. Donec nec ante suscipit, molestie urna sed, bibendum ex."}
                        </p> */}
                    </div>

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
    },
    'fr': {
        title: "Project - Article",
        desc: "Bogital Project - Latest Tech news in Africa",
    }
}


export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const apolloClient = getApolloClient()
        const data = await apolloClient.query({
            query: gql`
        query GetProjectBySlug($slug: String = "") {
            projectBy(slug: $slug) {
              projectId
              slug
              title
              featuredImage {
                node {
                  altText
                  title
                  sourceUrl(size: MEDIUM)
                }
              }
              content
            }
          }
    `,
            variables: {
                slug: context.params?.slug
            }
        })

        return {
            props: {
                project: data.data.projectBy as IProjectDataResponse,
                projects: [],
                slug: context.params?.slug,
                revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
            }
        }
    } catch (e) {
        console.error(e)
        return {
            props: {
                project: {},
                projects: [],
                slug: context.params?.slug,
                revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
            }
        }
    }
}



export const getStaticPaths: GetStaticPaths = async (context) => {
    const apolloClient = getApolloClient()
    const data = await apolloClient.query({
        query: gql`
        query AllProjectSlugs($language: LanguageCodeFilterEnum = ALL) {
            projects(where: {language: $language}) {
              edges {
                node {
                  projectId
                  slug
                }
              }
            }
          }
    `,
        variables: {}
    })

    return {
        paths: (data.data.projects.edges as { node: IProjectDataResponse }[]).map($ => ({ 'params': { slug: $.node.slug } })), //OK
        fallback: 'blocking'
    }

}

export default Project