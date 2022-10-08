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
                        <div
                            className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-teal-400">
                            <h2 className="focus:outline-none xl:text-4xl md:text-2xl text-xl font-extrabold mb-5 pt-4">Process</h2>
                            {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-coolGray-400">Vestibulum diam nunc</span> */}
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div
                            className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-coolGray-700">

                            {
                                s.items.map(_item => (
                                    <div
                                        key={_item.title}
                                        className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                                        <h3 className="text-xl font-semibold tracking-wide"> {_item.title} </h3>
                                        {/* <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">Dec 2020</time> */}
                                        <p className="mt-3">
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
                title: "Project Analysis",
                body: "This is where we will decide which technology sack to use for your web design or mobile application project. Project analysis can take up to 4 weeks to complete."
            },
            {
                title: "Prototyping",
                body: "After analysing the project, we will produce a prototype of the project that will be validated by the client before we go further. Prototyping can take between one week and 6 weeks depending on the project."
            },
            {
                title: "Coding",
                body: "Our favourite part, At this point, we will code your software to life. This part could take from one week to 16 weeks before the first delivery depending on the size of the project."
            },
            {
                title: "Content Creation",
                body: "At this point, we will create SEO ready content for your website/application. Here we will need all the documentation the client can provide to us."
            },
            {
                title: "Quality Check",
                body: "This is a critical step of our work. The whole project is thouroughly reviewed before final deployment."
            },
            {
                title: "Deployment",
                body: "Horraay. Your project is now battle tested and deployed"
            }
        ]
    },
    'fr': {
        items: [
            {
                title: "Analyse du projet",
                body: "C’est là que nous déciderons de la technologie à utiliser pour votre projet de conception Web ou d’application mobile. Analyse du projet peut prendre jusqu'à 4 semaines."
            },
            {
                title: "Prototypage",
                body: "Après analyse du projet, nous produirons un prototype du projet qui sera validé par le client avant d'aller plus loin. Le prototypage peut prendre jusqu'à six(6) semaines."
            },
            {
                title: "Coding",
                body: "Notre partie préférée, à ce stade, nous allons coder votre site Web / application. Cette partie nous coûteras entre une et 16 semaines en fonction de la taille du projet."
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