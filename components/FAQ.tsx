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
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-white">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-white">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    {
                        s.items.map(_item => (
                            <div key={_item.title}>
                                <h3 className="font-semibold text-white">{_item.title}</h3>
                                <p className="mt-1 dark:text-coolGray-400">
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
                body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            }
        ]
    },
    'fr': {
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
                body: "We provide a personalised content manager for all the web sites we develop at Bogital Cameroon. This content manager provides a simple interface to update the content of your website.In addition, we build Wordpress websites which are very easy to customise."
            }
        ]
    }
}


export default FAQ