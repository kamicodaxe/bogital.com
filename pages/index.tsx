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
import { projects } from './projects'

interface Props {
  data: {
  }
}
const Home: NextPage<Props> = ({ data }) => {
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
      <BlogPreview locale={locale as string} />
      <JoinNewsLetter locale={locale as string} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const data = {}

  return {
    props: { data },
    // revalidate: 1
  };
}

export default Home
