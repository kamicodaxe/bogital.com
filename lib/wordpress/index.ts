
// Wordpress Query

const app = {
    baseUrl: "",
    token: ""
}

function initialiseWordpress(options = {
    baseUrl: '',
    token: ''
}) {
    app.baseUrl = process?.env?.WORDPRESS_API_URI || options?.baseUrl
    app.token = process?.env?.WORDPRESS_AUTH_TOKEN || options?.token
}

async function getCollection(collectionPath: string) {
    if (!app.baseUrl) throw new Error('Wordpress not initialized')

    try {
        const response = await fetch(`${app.baseUrl}/wp-json/wp/v2/${collectionPath}`, {
            method: "GET", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${app.token}`
            },
        })
        const data = await response.json()
        console.log("Success:", data);
        return data
    } catch (e) {
        console.log(e)
        console.error("Error:", e);
        return []
    }

}

export default {
    initialiseWordpress,
    getCollection,
}

