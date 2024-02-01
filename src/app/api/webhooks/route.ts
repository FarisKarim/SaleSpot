const { createPool } = require('@vercel/postgres');
require('dotenv').config();
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

const pool = createPool(process.env.POSTGRES_URL);


export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the ID and type
  console.log("New verified event! evt.type:    ", evt.type);
  if (evt.type == "user.created") {
    const clerk_id = evt.data["id"];
    const first_name = evt.data["first_name"];
    const last_name = evt.data["last_name"];
    const email = evt.data["email_addresses"][0]["email_address"];
    console.log(email, clerk_id, first_name, last_name);
    try {
        const insertQuery = `
            INSERT INTO users (email, first_name, last_name, clerk_id)
            VALUES ($1, $2, $3, $4)
        `;

        await pool.query(insertQuery, [email, first_name, last_name, clerk_id]);
        console.log('User inserted successfully');
    } catch (err) {
        console.error('Error inserting user:', err);
    }
  } else if (evt.type == "user.updated") {
    // const clerk_id = evt.data["id"];
    console.log(evt.data);
  } else if (evt.type == "user.deleted") {
    const clerk_id = evt.data["id"];
    try {
        const deleteQuery = `
            DELETE FROM users WHERE clerk_id = $1
        `;

        await pool.query(deleteQuery, [clerk_id]);
        console.log('User deleted successfully');
    } catch (err) {
        console.error('Error deleting user:', err);
    }
  } 

  //   const { id } = evt.data;
  //   const eventType = evt.type;

  //   console.log(`Webhook with and ID of ${id} and type of ${eventType}`)
  //   console.log('Webhook body:', body)

  return new Response("", { status: 200 });
}
