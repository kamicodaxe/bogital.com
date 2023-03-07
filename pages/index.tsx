import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import BlogPreview from '../components/BlogPreview'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import HomeHeader from '../components/HomeHeader'
import JoinNewsLetter from '../components/JoinNewsLetter'
import Layout from '../components/Layout'
import OurWork from '../components/OurWork'
import Partners from '../components/Partners'
import Process from '../components/Process'
import Services from '../components/Services'
import wordpress from '../lib/wordpress'
import { IWordpressArticle } from '../lib/wordpress/types'

interface Props {
  articles: IWordpressArticle[]
  projects: IWordpressArticle[]
}
const Home: NextPage<Props> = ({ articles, projects }) => {
  const { locale } = useRouter()
  const title = "Bogital - Software development experts, we make the world a better place for you."
  const desc = "Bogital - Software development experts, we make the world a better place for you."

  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <HomeHeader locale={locale as string} active="home" />
      <OurWork isPreview locale={locale as string} projects={projects} />
      <Partners />
      <CTA />
      <Services />
      <Process locale={locale as string} />
      <FAQ locale={locale as string} />
      <BlogPreview locale={locale as string} articles={articles} />
      <JoinNewsLetter locale={locale as string} />
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  wordpress.initialiseWordpress()
  const params = "&per_page=4"
  const articles = await wordpress.getCollection(`posts?lang=${context.locale}&_embed${params}`) as IWordpressArticle[]
  const projects = await wordpress.getCollection(`projects?lang=${context.locale}&_embed${params}`) as IWordpressArticle[]
  return {
    props: {
      articles,
      projects,
      revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
    }
  }
}


export default Home
