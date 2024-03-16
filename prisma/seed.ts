import { PrismaClient } from "@prisma/client"

const db: PrismaClient = new PrismaClient()

interface Post{
    title: string;
    body: string;
}


async function getPosts() {
    const response = await fetch("https://dummyjson.com/posts")
    const { posts } = await response.json()
    return posts as Post[]
}

function slugfy(text: string){
    return text.replace(/\s/g, "-").replace(/[^a-zA-Z0-9-]/g, '').toLocaleLowerCase()
}


async function main() {
    const posts = await getPosts();

    for(const post of posts){
        await db.post.create({
            data: {
                title: post.title,
                content: post.body,
                slug: slugfy(post.title)
            }
        })
    }
}
main();