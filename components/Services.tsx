
const Services: React.FC<{}> = ({ }) => {
    return (
        <section className="p-4 md:p-8 bg-gradient-to-r from-teal-400 via-yellow-600 to-teal-800 text-white">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="focus:outline-none xl:text-4xl md:text-2xl text-xl text-center font-extrabold mb-5 pt-4">
                    Our Services
                </h2>
                {/* <p className="text-coolGray-400">Libero minima optio qui</p> */}
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4">
                    <img className="w-16 h-16 text-teal-400" src="/images/services/fa-html5.svg" />
                    <h3 className="my-3 text-3xl font-semibold">Responsive Web Design</h3>
                    <div className="space-y-1 leading-tight">
                        <p>
                            Your web site scales up or down depending if you view your website on a small smartphone, tablet or desktop
                            computer. Responsive web design enhances the user experience, especially on mobile phones. All our web
                            designs are responsive at Bogital.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <img className="w-16 h-16 text-teal-400" src="/images/services/fa-mobile-phone.svg" />
                    <h3 className="my-3 text-3xl font-semibold">Mobile Application development</h3>
                    <div className="space-y-1 leading-tight">
                        <p>
                            We use top-notch technologies to develop modern mobile applications across ios and android. We will follow
                            your mobile application project throughout its lifespan.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <img className="w-16 h-16 text-teal-400" src="/images/services/fa-wordpress.svg" />
                    <h3 className="my-3 text-3xl font-semibold">Wordpress Development</h3>
                    <div className="space-y-1 leading-tight">
                        <p>
                            We develop a custom Wordpress websites and themes. At bogital, We will build your Wordpress site from
                            scratch giving you the unique web design you deserve.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <img className="w-16 h-16 text-teal-400" src="/images/services/fa-globe.svg" />
                    <h3 className="my-3 text-3xl font-semibold">SEO</h3>
                    <div className="space-y-1 leading-tight">
                        <p>
                            We build SEO friendly websites scoring A grades on page test. This will help rank Your website on search
                            engines like google and bing more rapidly.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}


export default Services