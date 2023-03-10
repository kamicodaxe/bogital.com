import { useMemo } from "react"

interface Props {
    locale: string
}

const FAQ: React.FC<Props> = ({ locale }) => {

    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="bg-teal-800 text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-white">{s.title}</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">{s.subtitle}</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    {
                        s.items.map(_item => (
                            <div key={_item.title}>
                                <h3 className="font-semibold text-white">{_item.title}</h3>
                                <p className="mt-1 text-coolGray-400">
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
        title: "How it works?",
        subtitle: "Frequently asked questions",
        items: [
            {
                title: "How much will it cost me?",
                body: "The cost depends on many factors. These factors may include: features, technologies used in the backend, hosting, private emails, design complexity, client skills etc... Contact us directly for more information."
            },
            {
                title: "What are the payment terms?",
                body: "We expect our clients to deposit an upfront payment of 40 to 60% of the total amount allocated before project start. 20% of the amount is invoiced when the project is 80% completed, the rest is paid after the project is deployed."
            },
            {
                title: "What if I don't love your work?",
                body: "At Bogital, a project is completed only when the client is satisfied. Project prototyping is done at an early stage of the project to make you have a clear picture of the direction the project is taking. At this stage, we will work with you until satisfaction."
            },
            {
                title: "How to update my website?",
                body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to to manage and update."
            }
        ]
    },
    'fr': {
        title: "Comment ça marche?",
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