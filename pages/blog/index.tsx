import { gql } from "@apollo/client"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useMemo } from "react"
import BlogPreview from "../../components/BlogPreview"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import { getApolloClient, IPostDataResponse } from "../../lib/graphql"

interface Props {
    articles: IPostDataResponse[]
}

const Blog: React.FC<Props> = ({ articles }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={s?.title} desc={s?.desc}>
            <Header locale={locale as string} title="Blog" active='blog' className="bg-[url(https://source.unsplash.com/ip9R11FMbV8/1200x720)]" />

            <BlogPreview locale={locale as string} articles={articles} />

            {/* <div className="flex justify-center space-x-1 text-coolGray-100">
                <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-coolGray-900 border-coolGray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button type="button" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-coolGray-900 text-teal-400 border-teal-400">1</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-900 border-coolGray-800" title="Page 2">2</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-900 border-coolGray-800" title="Page 3">3</button>
                <button type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-coolGray-900 border-coolGray-800" title="Page 4">4</button>
                <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-coolGray-900 border-coolGray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div> */}

        </Layout>
    )
}


const strings = {
    'en': {
        title: "Blog",
        desc: "Bogital Blog - Latest Tech news in Africa",
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: {
                    src: "/images/blog/why-website.jpg",
                    alt: ''
                },
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            }
        ]
    },
    'fr': {
        title: "Blog",
        desc: "Bogital Blog - Latest Tech news in Africa",
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: {
                    src: "/images/blog/why-website.jpg",
                    alt: ''
                },
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            }
        ]
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    try {
        const apolloClient = getApolloClient()
        const data = await apolloClient.query({
            query: gql`
            query AllPost($first: Int = 10, $language: LanguageCodeFilterEnum = ALL) {
                posts(first: $first, where: {language: $language}) {
                  edges {
                    node {
                      postId
                      slug
                      title(format: RENDERED)
                      excerpt(format: RENDERED)
                      featuredImage {
                        node {
                          altText
                          caption(format: RENDERED)
                          title
                          sourceUrl(size: MEDIUM)
                        }
                      }
                      translations {
                        id
                        postId
                        slug
                        title
                        language {
                          locale
                          code
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
                articles: (data.data?.posts?.edges as { node: IPostDataResponse }[]).map(p => p.node),
                revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
            }
        }

    } catch (e) {
        console.error(e)
        return {
            props: {
                articles: [],
                revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
            }
        }

    }
}

export default Blog