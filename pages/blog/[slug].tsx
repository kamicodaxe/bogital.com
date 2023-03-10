import { gql } from "@apollo/client"
import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import BlogPreview from "../../components/BlogPreview"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import { getApolloClient, IPostDataResponse } from "../../lib/graphql"

interface Props {
    article: IPostDataResponse,
    articles: IPostDataResponse[],
    slug: string
}

const Blog: React.FC<Props> = ({ article, articles, slug }) => {
    const { locale } = useRouter()
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <Layout locale={locale as string} title={article?.title || s.title} imgSrc={article?.featuredImage?.node?.sourceUrl} desc={article?.excerpt?.replaceAll('<p>', "").replaceAll('</p>', "") || s.desc}>
            <Header locale={locale as string} title={article?.title} active='blog' className="bg-[url(https://source.unsplash.com/ip9R11FMbV8/1200x720)]" />
            <section className=" text-gray-800">
                <div className="grid grid-cols-3 relative">

                    <div className=" col-span-3 md:col-span-2  mx-auto">

                        <div className=" max-w-fit mt-10">
                            <div className="flex flex-wrap justify-between text-sm font-bold text-coolGray-400">
                                {/* <span className="">{article?.date}</span> */}
                                {/* <span className="">{article?.views} views</span> */}
                            </div>
                            <img
                                className=""
                                src={article.featuredImage.node.sourceUrl}
                                alt=""
                            // layoutId="image"
                            />
                        </div>

                        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: article?.content || '' }} />


                    </div>


                    <div className="pt-12 hidden md:block space-y-4">
                        {
                            articles.map(_item => (
                                <Link key={_item.slug} href={`/blog/${_item.slug}`}>
                                    <article className="flex cursor-pointer items-center hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                        <img
                                            className="object-cover w-16 h-16 bg-coolGray-500"
                                            src={_item.featuredImage.node.sourceUrl}
                                            alt=""
                                        />
                                        <div className="px-2">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            <h6 className=" font-semibold leading-snug text-md">{_item.title}</h6>
                                            {/* <span className="text-xs tracking-wider uppercase text-teal-400">{_item.author}</span> */}
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400">
                                                {/* <span>{_item.date}</span> */}
                                                {/* <span>{_item.views} views</span> */}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))
                        }
                    </div>

                </div>

                <BlogPreview locale={locale as string} articles={articles} />

            </section>
        </Layout>
    )
}


const strings = {
    'en': {
        title: "Blog - Article",
        desc: "Bogital Blog - Latest Tech news in Africa"
    },
    'fr': {
        title: "Blog - Article",
        desc: "Bogital Blog - Latest Tech news in Africa"
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const apolloClient = getApolloClient()
    const data = await apolloClient.query({
        query: gql`
        query GetPostBySlug($slug: String = "", $language: LanguageCodeFilterEnum = EN) {
            postBy(slug: $slug) {
              id
              postId
              title(format: RENDERED)
              slug
              excerpt(format: RENDERED)
              featuredImage {
                node {
                  altText
                  sourceUrl(size: MEDIUM_LARGE)
                }
              }
              content(format: RENDERED)
              translations {
                id
                postId
                slug
                uri
                link
                language {
                  code
                  locale
                }
              }
            }
            posts(where: {language: $language}) {
              edges {
                node {
                  postId
                  slug
                  title(format: RENDERED)
                  featuredImage {
                    node {
                      altText
                      caption
                      sourceUrl(size: THUMBNAIL)
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
            slug: context.params?.slug,
            language: context.locale?.toUpperCase(),
        }
    })


    return {
        props: {
            article: data?.data.postBy as IPostDataResponse,
            articles: (data?.data?.posts?.edges).map((p: { node: IPostDataResponse }) => p?.node),
            slug: context.params?.slug,
            revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
        }
    }

}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const apolloClient = getApolloClient()
    const data = await apolloClient.query({
        query: gql`
        query AllPostSlugs($language: LanguageCodeFilterEnum = ALL) {
            posts(where: {language: $language}) {
              edges {
                node {
                  postId
                  slug
                }
              }
            }
          }
    `,
        variables: {}
    })

    return {
        paths: (data.data.posts.edges as { node: IPostDataResponse }[]).map($ => ({ 'params': { slug: $.node.slug } })), //OK
        fallback: 'blocking'
    }

}


export default Blog