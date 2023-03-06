import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../components/Header'
import JoinNewsLetter from '../components/JoinNewsLetter'
import Layout from '../components/Layout'

interface Props {
  data: any[]
}

const Career: NextPage<Props> = ({ data }) => {
  const { locale } = useRouter()
  const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
  const s = strings[lang]

  return (
    <Layout locale={locale as string} title={s.title} desc={s.desc}>
      <Header locale={locale as string} title="Career" className="bg-[url(https://source.unsplash.com/xhGMQ_nYWqU/1280x)]" active='contact' />
      <section className="my-12 bg-coolGray-800 text-coolGray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                  </path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            // noalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            action="https://formsubmit.co/contact@bogital.com" method="POST"
          >
            <label className="block">
              <span className="mb-1">{s.name}</span>
              <input type="text" placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm py-2 bg-coolGray-800 border-b focus:border-teal-400 focus:outline-none" />
            </label>
            <label className="block">
              <span className="mb-1">{s.phone}</span>
              <input type="phone" placeholder="(+1) 512 4587 6321"
                className="block w-full rounded-md py-2 bg-coolGray-800 border-b focus:border-teal-400 focus:outline-none" />
            </label>
            <label className="block">
              <span className="mb-1">{s.email}</span>
              <input type="email" placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm py-2 focus:ring-teal-400 bg-coolGray-800 border-b focus:border-teal-400 focus:outline-none" />
            </label>
            <label className="block">
              <span className="mb-1">{s.message}</span>
              <textarea rows={5}
                className="block w-full rounded-md shadow-sm focus:ring-teal-400 bg-coolGray-800 border-b focus:border-teal-400 focus:outline-none"></textarea>
            </label>

            <input type="hidden" name="_next" value="https://Bogital.net"></input>
            <input type="hidden" name="_subject" value="New submission! Bogital"></input>

            <button type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-teal-400 text-white focus:ring-teal-400 hover:ring-violet-400">
              {s.getInTouch}
            </button>
          </form>
        </div>
      </section>
      
      <JoinNewsLetter locale={locale as string} />

    </Layout>
  )
}

const strings = {
  'en': {
    'title': 'Career, Bogital By Bogital',
    'desc': 'Career, Bogital By Bogital',
    'subtitle': '',
    'contact': 'Career us',
    'form': 'Career form',
    'name': 'Full name',
    'phone': 'Phone number',
    'email': 'Email address',
    'message': 'Message',
    'getInTouch': 'get in touch',
  },
  'fr': {
    'title': 'Contactez-nous, Bogital By Bogital',
    'desc': 'Contactez-nous, Bogital By Bogital',
    'subtitle': '',
    'contact': 'Contactez-nous',
    'form': 'Formulaire de contact',
    'name': 'Nom complet',
    'phone': 'Numéro de téléphone',
    'email': 'Adresse courriel',
    'message': 'Message',
    'getInTouch': 'contactez-nous',
  },
}


export const getStaticProps: GetStaticProps = async (context) => {
  const data: any[] = []
  return {
    props: { data }
  };
}


export default Career