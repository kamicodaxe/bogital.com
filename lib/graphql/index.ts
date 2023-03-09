import { ApolloClient, HttpLink, InMemoryCache, NormalizedCache } from '@apollo/client';

let client: ApolloClient<NormalizedCache>;

export function getApolloClient() {
    if (!client) return _createApolloClient()
    return client
}

export function _createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: `${process?.env?.WORDPRESS_API_URI}/graphql`
        }),
        cache: new InMemoryCache()
    })
}


export interface IPostDataResponse {
    "postId": 81,
    "slug": string
    "uri": string
    "title": string
    "featuredImage": {
        "node": {
            "altText": string
            "caption": string | null,
            "sourceUrl": string
        }
    },
    "excerpt": string
    "content"?: string
}

export interface IProjectDataResponse {
    "projectId": 81,
    "slug": string
    "uri": string
    "title": string
    "featuredImage": {
        "node": {
            "altText": string
            "caption": string | null,
            "sourceUrl": string
        }
    },
    "excerpt": string
    "content"?: string
}

export interface IHomePageData {
    "data": {
        "projects": {
            "edges": {
                "node": IProjectDataResponse
            }[]
        },
        "posts": {
            "edges": {
                "node": IPostDataResponse
            }[]
        }
    },
    "extensions": {
        "debug": [
            {
                "type": "DEBUG_LOGS_INACTIVE",
                "message": "GraphQL Debug logging is not active. To see debug logs, GRAPHQL_DEBUG must be enabled."
            }
        ],
        "graphqlSmartCache": {
            "graphqlObjectCache": []
        }
    }
}