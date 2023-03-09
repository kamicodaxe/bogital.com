import { gql } from '@apollo/client'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import BlogPreview from '../components/BlogPreview'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import OurWork from '../components/OurWork'
import Partners from '../components/Partners'
import Process from '../components/Process'
import Services from '../components/Services'
import { getApolloClient, IHomePageData } from '../lib/graphql'
import wordpress from '../lib/wordpress'

const Home: NextPage<IHomePageData> = ({ data: { projects, posts } }) => {
  const { locale } = useRouter()
  const title = "Bogital - Software development experts, we make the world a better place for you."
  const desc = "Bogital - Software development experts, we make the world a better place for you."

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <HomeHeader locale={locale as string} active="home" />
      <OurWork isPreview locale={locale as string} projects={projects?.edges?.map(p => p.node) || []} />
      <Partners locale={locale as string} />
      <CTA />
      <Services locale={locale as string} />
      <Process locale={locale as string} />
      <FAQ locale={locale as string} />
      <BlogPreview isPreview locale={locale as string} articles={posts?.edges?.map(p => p.node) || []} />
      {/* <JoinNewsLetter locale={locale as string} /> */}
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  wordpress.initialiseWordpress()
  const params = "&per_page=4"

  const apolloClient = getApolloClient()
  try {
    const data = await apolloClient.query({
      query: gql`
      query AllHomePageData($language: LanguageCodeFilterEnum = ${context.locale?.toUpperCase()}) {
        projects(where: {language: $language}, first: 4) {
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
                  title(format: RAW)
                  sourceUrl(size: MEDIUM)
                }
              }
            }
          }
        }
        posts(where: {language: $language}, first: 4) {
          edges {
            node {
              postId
              slug
              uri
              title(format: RENDERED)
              featuredImage {
                node {
                  altText
                  caption(format: RAW)
                  sourceUrl(size: MEDIUM)
                }
              }
              excerpt
            }
          }
        }
      }
      `
    }) as unknown as IHomePageData

    return {
      props: {
        ...data,
        revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
      }
    }
  } catch (e) {
    console.warn(e)
    return {
      props: {
        error: 'server error',
        data: {
          projects: [],
          posts: []
        },
        revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
      }
    }
  }
}


export default Home
