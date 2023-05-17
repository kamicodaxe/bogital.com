import { useMemo } from "react"

interface Props {
    locale: string
}

const Process: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="bg-white text-coolGray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <p className="p-2 text-lg font-medium tracking-wider">
                            {(lang == 'fr' ? "Comment ça marche?" : "How we do?")}</p>
                        <h2 className="mb-12 text-4xl font-bold leading-none sm:text-5xl">
                            {(lang == 'fr' ? "Process" : "Process")}</h2>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div
                            className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-coolGray-700">

                            {
                                s.items.map(_item => (
                                    <div
                                        key={_item.title}
                                        className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-400">
                                        <h3 className="text-xl font-semibold tracking-wide"> {_item.title} </h3>
                                        {/* <time className="text-xs tracking-wide uppercase text-coolGray-400">Dec 2020</time> */}
                                        <p className="mt-4">
                                            {_item.body}
                                        </p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const strings = {
    'en': {
        items: [
            {
                title: "Discovery",
                body: "At Bogital, we begin every web development project with a thorough discovery phase, gaining a deep understanding of your business, goals, and audience. We conduct a comprehensive analysis of your industry landscape and competitors to inform our approach."
            },
            {
                title: "Planning",
                body: "Using the insights gained during the discovery phase, our team develops a customized web development plan that is tailored to your specific needs and objectives. This includes creating a detailed project roadmap, outlining timelines, and setting project milestones, all with Bogital's expertise."
            },
            {
                title: "Design",
                body: "Our team of expert designers at Bogital creates a stunning visual design that reflects your brand identity and engages your target audience. We work closely with you to ensure the design meets your expectations and aligns with your goals."
            },
            {
                title: "Development",
                body: "Once the design is approved, our developers at Bogital get to work building a responsive, user-friendly website that is optimized for speed, security, and functionality. We use the latest web development tools and technologies to ensure your site is fully optimized for SEO, all with Bogital's expertise."
            },
            {
                title: "Testing",
                body: "Before launching your site, our team at Bogital conducts rigorous testing to ensure it is error-free and performs flawlessly across all devices and browsers. This includes functional testing, user acceptance testing, and cross-browser testing."
            },
            {
                title: "Launch and Optimization",
                body: "Once your project is launched, our team at Bogital continues to work with you to ensure its ongoing success. We offer ongoing maintenance and support services to keep your platform, mobile app, or software solution running smoothly and provide regular data analysis and optimization to ensure it is performing at its best."
            }
        ]
    },
    'fr': {
        items: [
            {
                title: "Analyse du projet",
                body: "C’est là que nous déciderons de la technologie à utiliser pour votre projet de conception Web ou d’application mobile."
            },
            {
                title: "Prototypage",
                body: "Après analyse du projet, nous produirons un prototype du projet qui sera validé par le client avant d'aller plus loin."
            },
            {
                title: "Coding",
                body: "Notre partie préférée, à ce stade, nous allons coder votre site Web / application."
            },
            {
                title: "Création de contenu",
                body: "À ce stade, nous créerons du contenu pour votre projet. Ici, nous aurons besoin de toute la documentation que le client peut nous fournir."
            },
            {
                title: "Contrôle de qualité",
                body: "Ici, votre site Web ou votre application mobile fait l’objet d’un examen approfondi. Après la phase de contrôle de la qualité, votre projet sera prêt pour la production."
            },
            {
                title: "Déploiement",
                body: "Horraah. Votre projet est maintenant disponible au public."
            }
        ]
    }
}

export default Process