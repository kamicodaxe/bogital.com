import { useMemo } from "react"

interface Props {
    locale: string
}

const FAQ: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="bg-primary text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center text-white">{s.title}</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">{s.subtitle}</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    {
                        s.items.map(_item => (
                            <div key={_item.title}>
                                <h3 className="text-xl font-semibold tracking-wide text-white">{_item.title}</h3>
                                <p className="mt-4 text-base">
                                    {_item.body}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

const strings = {
    'en': {
        title: "Any Questions?",
        subtitle: "Frequently asked questions",
        items: [
            {
                title: "How long does it take to develop a website or mobile app with Bogital?",
                body: "The timeline for developing a website or mobile app with Bogital can vary depending on the complexity of the project. We work closely with our clients to establish clear project goals and timelines to ensure that we deliver high-quality results on time and within budget."
            },
            {
                title: "What kind of maintenance and support services does Bogital offer after a project is completed?",
                body: "At Bogital, we offer ongoing maintenance and support services to ensure that our clients' websites and apps continue to perform at their best. We provide regular updates, security patches, and other maintenance services to keep our clients' digital properties running smoothly."
            },
            {
                title: "What kind of maintenance and support services does Bogital offer after a project is completed?",
                body: "At Bogital, we offer ongoing maintenance and support services to ensure that our clients' websites and apps continue to perform at their best. We provide regular updates, security patches, and other maintenance services to keep our clients' digital properties running smoothly."
            },
            {
                title: "What are the costs associated with Bogital's development services?",
                body: "The cost of our development services varies depending on the scope of the project, the level of customization required, and other factors. We offer transparent pricing and work closely with our clients to establish clear project budgets and timelines."
            }
        ]
    },
    'fr': {
        title: "Des questions?",
        subtitle: "Questions fréquemment posées",
        items: [
            {
                title: "Combien ça va me coûter?",
                body: "Le coût dépend des fonctionnalités, les hébergements, complexités du projet. Contactez-nous directement pour une consultation gratuite."
            },
            {
                title: "Quels sont les termes de paiement ?",
                body: "Generalement, nous percevons 40 à 60% du montant avant le début du project"
            },
            {
                title: "Vous n'aimez pas notre travail?",
                body: "Chez Bogital, un projet n’est achevé que lorsque le client est satisfait. Si vous n'aimez pas notre prototype de conception Web, nous travaillerons avec vous pour l'améliorer jusqu'à satisfaction."
            },
            {
                title: "Comment mettre à jour votre site internet ?",
                body: "Nous fournissons un gestionnaire de contenu personnalisé pour tous les sites web que nous développons à Bogital Cameroun. Ce gestionnaire de contenu fournit une interface simple pour mettre à jour le contenu de votre site Web. De plus, nous construisons des sites web avec Wordpress qui sont très faciles à modifier."
            }
        ]
    }
}


export default FAQ