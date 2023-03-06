import type { AppProps } from 'next/app'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/globals.css'
// import reportWebVitals from "./reportWebVitals";
import { AnimateSharedLayout } from "framer-motion"

import ProgressBar from '../components/ProgressBar'

const progress = new ProgressBar({
  size: 2,
  color: "rgb(91,209,215)",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  })
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <AnimateSharedLayout>
    <Component {...pageProps} />
  </AnimateSharedLayout>
}

export default MyApp


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
