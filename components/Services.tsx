import { useMemo } from "react"

interface Props {
    locale: string
}

const Services: React.FC<Props> = ({ locale }) => {
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]
    return (
        <section className="p-4 md:p-8 bg-gradient-to-r from-primary via-yellow to-primary">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <p className="p-2 text-lg font-medium tracking-wider text-center">
                    {(lang == 'fr' ? "What can we do for you?" : "What can we do for you?")}</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                    {s.title}</h2>

            </div>
            <div className="container max-w-7xl mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {
                    s.items.map(_service => (<div key={_service.title} className="flex flex-col  p-4">
                        <img className="w-32 h-32" src={_service.image.src} alt={_service.image.alt} />
                        <h3 className="my-3 text-xl font-semibold">{_service.title}</h3>
                        <div className="space-y-1 leading-tight">
                            <p className="text-base">
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
                title: "Responsive Web development",
                image: {
                    src: "/images/services/creation-de-sites-web.png",
                    alt: ""
                },
                body: "Experience the power of a visually appealing and fully responsive website with Bogital's expert web development services. Our team specializes in creating custom websites that are optimized for all devices, providing a seamless user experience. Whether you need a simple brochure site or a complex e-commerce platform, we have the skills and expertise to bring your vision to life."
            },
            {
                title: "Mobile Application development",
                image: {
                    src: "/images/services/developpement-mobile.png",
                    alt: ""
                },
                body: "Transform your ideas into innovative mobile applications with Bogital's professional app development services. Our experienced team of developers creates custom iOS and Android apps tailored to your specific requirements. From conceptualization to deployment, we work closely with you to ensure that your app delivers a smooth and engaging user experience."
            },
            {
                title: "Software Development",
                image: {
                    src: "/images/services/software-development.png",
                    alt: ""
                },
                body: "At Bogital, we provide comprehensive software development solutions to meet your business needs. Our team of skilled developers excels in front-end and back-end development, as well as database design. Utilizing the latest technologies and industry best practices, we deliver robust and scalable software solutions that meet your needs."
            },
            {
                title: "SEO and digital marketing",
                image: {
                    src: "/images/services/seo.png",
                    alt: "SEO and digital marketing"
                },
                body: "Drive targeted traffic to your website and enhance your online presence with Bogital's results-driven SEO and digital marketing strategies. Our team of experts specializes in optimizing websites for search engines, conducting keyword research, creating compelling content, and implementing effective social media marketing campaigns. Gain a competitive edge and reach your target audience effectively."
            },
            {
                title: "UX/UI design",
                image: {
                    src: "/images/services/conception-ux.png",
                    alt: "UX/UI design"
                },
                body: "Create captivating user experiences and visually appealing interfaces with Bogital's innovative UX/UI design services. Our talented designers blend creativity with user-centric approaches to craft intuitive and aesthetically pleasing designs. From wireframing to prototyping, we ensure that every element of your digital product is optimized for maximum user engagement and satisfaction."
            },
            {
                title: "E-commerce Solutions",
                image: {
                    src: "/images/services/magasin-en-ligne.png ",
                    alt: "E-commerce Solutions"
                },
                body: "Drive your online business to new heights with Bogital's powerful e-commerce solutions. Our tailored approach includes creating captivating online stores, seamless payment integration, and efficient order management systems. Boost your sales, expand your reach, and deliver exceptional customer experiences with Bogital by your side."
            }
        ]
    },
    'fr': {
        title: "Nos services",
        desc: "Services offerts par Bogital - Votre partenaire en développement logiciel",
        items: [
            {
                title: "Développement web réactif",
                image: {
                    src: "/images/services/creation-de-sites-web.png",
                    alt: ""
                },
                body: "Chez Bogital, nous sommes spécialisés dans la création de sites web sur mesure et réactifs qui offrent une expérience utilisateur optimale. Que vous ayez besoin d'un site vitrine moderne ou d'une plateforme e-commerce puissante, nous sommes là pour vous fournir des solutions de haute qualité."
            },
            {
                title: "Développement d'applications mobiles",
                image: {
                    src: "/images/services/developpement-mobile.png",
                    alt: ""
                },
                body: "Notre équipe expérimentée de développeurs d'applications mobiles peut créer des applications iOS et Android personnalisées pour répondre à vos besoins spécifiques. De la conception à la réalisation, nous mettons tout en œuvre pour offrir des applications performantes et conviviales."
            },
            {
                title: "Développement de logiciels sur mesure",
                image: {
                    src: "/images/services/software-development.png",
                    alt: ""
                },
                body: "Bogital propose des services de développement de logiciels complets, comprenant la conception et la programmation sur mesure. Nous mettons en œuvre les dernières technologies et les meilleures pratiques pour créer des solutions logicielles robustes et évolutives qui répondent parfaitement à vos besoins."
            },
            {
                title: "Optimisation SEO et marketing digital",
                image: {
                    src: "/images/services/seo.png",
                    alt: "SEO et marketing digital"
                },
                body: "Notre équipe d'experts en marketing digital peut vous aider à optimiser votre visibilité en ligne grâce à des techniques avancées de référencement (SEO) et de marketing digital. Nous travaillons sur l'optimisation de votre site web, la recherche de mots clés pertinents et la gestion de campagnes marketing ciblées pour attirer plus de visiteurs qualifiés."
            },
            {
                title: "Conception UX/UI",
                image: {
                    src: "/images/services/conception-ux.png",
                    alt: "Conception UX/UI"
                },
                body: "Nous accordons une grande importance à l'expérience utilisateur (UX) et à l'interface utilisateur (UI) dans nos projets de développement. Notre équipe de concepteurs talentueux crée des interfaces conviviales et attrayantes pour garantir une expérience utilisateur fluide et engageante."
            },
            {
                title: "Solutions e-commerce",
                image: {
                    src: "/images/services/magasin-en-ligne.png",
                    alt: "Solutions e-commerce"
                },
                body: "Propulsez votre entreprise en ligne vers de nouveaux sommets grâce aux solutions e-commerce puissantes de Bogital. Notre approche personnalisée comprend la création de boutiques en ligne captivantes, une intégration de paiement fluide et des systèmes de gestion de commandes efficaces. Stimulez vos ventes, étendez votre portée et offrez des expériences client exceptionnelles avec Bogital"
            }
        ]
    }
}


export default Services