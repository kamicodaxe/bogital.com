// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Head from 'next/head';
import Script from 'next/script';
import { useMemo } from 'react';
import Footer from "./Footer";


interface Props extends React.PropsWithChildren {
    locale: string
    title: string
    desc: string
    hideFooter?: boolean
}

interface Props {
    locale: string
}

const Layout: React.FC<Props> = ({ children, locale, title, desc, hideFooter }) => {
    const isFr = useMemo(() => locale.toLowerCase().includes('fr'), [locale])
    const lang = isFr ? 'fr_FR' : 'en_US'
    const siteName = isFr ? "Bogital - Nous vous accompagnons dans la digitalisation de votre activité." : "Bogital - We build software to make your life easier"

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc} />
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content={desc} />
                <meta name="robots" content="max-image-preview:large" />
                {/* <link rel="canonical" href="http://www.fenassco.com/" /> */}
                <meta property="og:locale" content={lang} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={desc} />
                {/* <meta property="og:url" content="http://fenassco.com/" /> */}
                <meta property="og:image" content="/favicon.png" />
                <meta property="og:image:secure_url" content="/favicon.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={desc} />
                <meta name="twitter:image" content="/favicon.png" />
            </Head>

            {children}

            {/* @ts-ignore */}
            {!hideFooter && <Footer locale={locale as string} />}

            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            {
                title !== "Contact" && <TawkMessengerReact
                    propertyId="64064e8131ebfa0fe7f10821"
                    widgetId="1gqsa5aj9" />
            }
        </div>
    )
}

export default Layout