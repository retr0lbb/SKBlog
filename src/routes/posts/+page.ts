import type { Post } from "@prisma/client";
import type { PageLoad } from "./$types";

export const load: PageLoad = async({fetch, depends}) =>{
    const response = await fetch(`/api/posts`);
    const posts:Post[] = await response.json();

    depends("app:posts");
    return { posts };
}

