import type { RequestHandler } from "./$types";
import db from "$lib/database"
import { json } from "@sveltejs/kit";



export const GET: RequestHandler = async ({ url, route, params }) => {    
    
    const limit = Number(url.searchParams.get("limit") ?? 30);
    const order: any = url.searchParams.get("order") ?? "asc"

    const posts = await db.post.findMany({
        orderBy: {
            id: order || "desc"
        },
        take: limit
    })

    return json(posts);
};