import { useMemo } from "react"

interface Props {
    locale: string
}

const Services: React.FC<Props> = ({ locale }) => {
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]
    return (
        <section className="p-4 md:p-8 bg-gradient-to-r from-teal-400 via-yellow-600 to-teal-800 text-white">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="focus:outline-none xl:text-4xl md:text-2xl text-xl text-center font-extrabold mb-5 pt-4">
                    {s.title}
                </h2>
                {/* <p className="text-coolGray-400">Libero minima optio qui</p> */}
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    s.items.map(_service => (<div key={_service.title} className="flex flex-col items-center p-4">
                        <img className="w-16 h-16 text-teal-400" src={_service.image.src} alt={_service.image.alt} />
                        <h3 className="my-3 text-3xl font-semibold">{_service.title}</h3>
                        <div className="space-y-1 leading-tight">
                            <p>
                                {_service.body}
                            </p>
                        </div>
                    </div>))
                }
            </div>
        </section>
    )
}


const strings = {
    'en': {
        title: "Our services",
        desc: "Bogital Services - Services offered by bogital",
        items: [
            {
                title: "Responsive Web Design",
                image: {
                    src: "/images/services/fa-html5.svg",
                    alt: ""
                },
                body: "Your web site scales up or down depending if you view your website on a small smartphone, tablet or desktop computer. Responsive web design enhances the user experience, especially on mobile phones. All our web designs are responsive at Bogital."
            },
            {
                title: "Mobile Application development",
                image: {
                    src: "/images/services/fa-mobile-phone.svg",
                    alt: ""
                },
                body: "We use top-notch technologies to develop modern mobile applications across ios and android. We will follow your mobile application project throughout its lifespan."
            },
            {
                title: "Wordpress Development",
                image: {
                    src: "/images/services/fa-wordpress.svg",
                    alt: ""
                },
                body: "We develop a custom Wordpress websites and themes. At bogital, We will build your Wordpress site from scratch giving you the unique web design you deserve."
            },
            {
                title: "SEO",
                image: {
                    src: "/images/services/fa-globe.svg",
                    alt: ""
                },
                body: "We build SEO friendly websites scoring A grades on page test. This will help rank Your website on search engines like google and bing more rapidly."
            },
        ]
    },
    'fr': {
        title: "Nos services",
        desc: "Bogital services - Les services proposé par Bogital",
        items: [
            {
                title: "Web design",
                image: {
                    src: "/images/services/fa-html5.svg",
                    alt: ""
                },
                body: "Your web site scales up or down depending if you view your website on a small smartphone, tablet or desktop computer. Responsive web design enhances the user experience, especially on mobile phones. All our web designs are responsive at Bogital."
            },
            {
                title: "Application mobile",
                image: {
                    src: "/images/services/fa-mobile-phone.svg",
                    alt: ""
                },
                body: "We use top-notch technologies to develop modern mobile applications across ios and android. We will follow your mobile application project throughout its lifespan."
            },
            {
                title: "Wordpress",
                image: {
                    src: "/images/services/fa-wordpress.svg",
                    alt: ""
                },
                body: "We develop a custom Wordpress websites and themes. At bogital, We will build your Wordpress site from scratch giving you the unique web design you deserve."
            },
            {
                title: "Réferencements sur les moteurs de recherces",
                image: {
                    src: "/images/services/fa-globe.svg",
                    alt: ""
                },
                body: "We build SEO friendly websites scoring A grades on page test. This will help rank Your website on search engines like google and bing more rapidly."
            },
        ]
    }
}


export default Services