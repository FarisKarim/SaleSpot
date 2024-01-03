import { createPool } from '@vercel/postgres';

// Assuming you're using an environment variable for your PostgreSQL connection string
const pool = createPool(process.env.POSTGRES_URL);

export async function GET() {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM items');
        client.release();

        // Using the new Response format for Route Handlers
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error(error);
        // Handling the error in the Route Handler format
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
