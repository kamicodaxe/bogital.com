
// Wordpress Query

const app = {
    baseUrl: "",
    token: ""
}

function initialiseWordpress(options = {
    baseUrl: 'https://wordpress.bogital.com/api',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJrYW1pY29kYXhlIiwiaWF0IjoxNjc3ODkzMTU2LCJleHAiOjE4MzU1NzMxNTZ9.S063YeaSaIbZ7TAHfNSZLlpBd5CMpVLSoAXcbKqb8mg'
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

