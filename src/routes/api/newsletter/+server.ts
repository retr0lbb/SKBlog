import type { RequestHandler } from "@sveltejs/kit";


export const GET: RequestHandler = async(event) => {
    const options: ResponseInit = {
        headers: {
            x: "some kind of message here",
        },
        status: 418,
        statusText: "I'm a tea pot"
    }
    
    return new Response("hellow", options)
}

export const POST: RequestHandler = async(event) =>{
    const data = await event.request.formData()
    const email = data.get("email")


    // subcrive to user n

    console.log(email);

    return new Response(
        JSON.stringify({ sucess: true }),{
            headers: {
                'Content-type' : "application/json"
            }    
        }
    )
}