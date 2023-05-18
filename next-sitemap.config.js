/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true, // (optional)
    alternateRefs: [
        {
            href: process.env.SITE_URL + '/en',
            hreflang: 'en',
        },
        {
            href: process.env.SITE_URL + '/fr',
            hreflang: 'fr',
        },
    ],
}