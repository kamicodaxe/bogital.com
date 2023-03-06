


export interface IWordpressArticle {
    id: number
    date: string
    date_gmt: string
    guid: { rendered: string },
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: { rendered: string },
    content: {
        rendered: string
        protected: boolean
    },
    excerpt: {
        rendered: string
        protected: false
    },
    author: number
    featured_media: number
    comment_status: string
    ping_status: string
    sticky: false
    template: string
    format: string
    meta: []
    categories: number[]
    tags: []
    acf: { heading: string, sub_heading: string, description: string },
    aioseo_notices: [],
    _links: {
        self: any[]
        collection: any[]
        about: any[]
        author: any[]
        replies: any[]
        'version-history': any[]
        'predecessor-version': any[]
        'wp:featuredmedia': any[]
        'wp:attachment': any[]
        'wp:term': any[]
        curies: any[]
    }
    _embedded: {
        author: any[]
        replies: any[]
        'wp:featuredmedia': any[]
        'wp:term': any[]
    }
}