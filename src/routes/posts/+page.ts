import type { Post } from "@prisma/client";
import type { PageLoad } from "./$types";

export const load: PageLoad = async({fetch, depends}) =>{
    const randomNumberOfPosts = Math.round(Math.random() * 30)
    const response = await fetch(`/api/posts?limit=${randomNumberOfPosts}`);
    const posts:Post[] = await response.json();

    depends("app:posts");
    return { posts };
}

