import db from "$lib/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async({params}) => {
    if(!params){
        return
    }
    const post = await db.post.findUnique({
        where: {
            slug: params.post_slug
        }
    })

    if(!post){
        throw error(404, "Post Not Found too bad")
    }

    return { post };
}