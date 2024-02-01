import { WebhookEvent, UserJSON} from "@clerk/nextjs/dist/types/server";

export async function POST(request: Request) {
    const payload: WebhookEvent = await request.json();
    if (payload.type === "user.created") {
        const user: UserJSON = payload.data;
        console.log(user);
        
    }
    
    

    return Response.json({ message: "Received" });
}
export async function GET() {
    return Response.json({ message: "Hello World!" });
}
