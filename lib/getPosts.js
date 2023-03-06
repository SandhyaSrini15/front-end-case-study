export default async function getAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}