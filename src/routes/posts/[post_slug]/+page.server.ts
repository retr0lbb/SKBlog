import db from "$lib/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({params}) => {
    if(!params){
        return
    }
    console.log(params);

    const posts = await db.post.findUnique({
        where: {
            slug: params.post_slug
        }
    })

    if(!posts){
        throw error(404, "Post Not Found too bad")
    }

    return { posts };
}