import { gql } from "@apollo/client"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useMemo } from "react"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import OurWork from "../../components/OurWork"
import { getApolloClient, IProjectDataResponse } from "../../lib/graphql"

interface Props {
    projects: IProjectDataResponse[]
}

const Projects: React.FC<Props> = ({ projects }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s.title} desc={s.desc}>
            <Header locale={locale as string} title={s.title} active='projects' className="bg-[url(https://source.unsplash.com/2zDXqgTzEFE/1200x720)]" />
            <OurWork locale={locale as string} projects={projects} />
        </Layout>
    )
}

const strings = {
    'en': {
        title: "Projects",
        desc: "Bogital Projects - Latest Tech news in Africa",
    },
    'fr': {
        title: "Projets",
        desc: "Projets Bogital - Nos projects",
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const apolloClient = getApolloClient()
        const data = await apolloClient.query({
            query: gql`
        query AllProjectsPreview($language: LanguageCodeFilterEnum = EN, $first: Int = 4) {
            projects(first: $first, where: {language: $language}) {
              edges {
                node {
                  projectId
                  slug
                  uri
                  title(format: RENDERED)
                  featuredImage {
                    node {
                      altText
                      caption
                      title(format: RENDERED)
                      sourceUrl(size: MEDIUM)
                    }
                  }
                  tools {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }

                }
              }
            }
          }
    `,
            variables: {
                language: context.locale?.toUpperCase(),
                first: 10
            }
        })

        return {
            props: {
                projects: (data.data?.projects?.edges as { node: IProjectDataResponse }[]).map(p => p.node),
                revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
            }
        }
    } catch (e) {
        console.error(e)
        return {
            props: {
                projects: [],
                revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
            }
        }
    }

}

export default Projects