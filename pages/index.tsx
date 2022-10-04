import type { GetStaticProps, NextPage } from 'next'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import OurWork from '../components/OurWork'
import FAQ from '../components/FAQ'
import Partners from '../components/Partners'
import CTA from '../components/CTA'
import Services from '../components/Services'
import Process from '../components/Process'
import BlogPreview from '../components/BlogPreview'
import JoinNewsLetter from '../components/JoinNewsLetter'

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
      <OurWork locale={locale as string} />
      <Partners />
      <CTA />
      <Services />
      <Process />
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
