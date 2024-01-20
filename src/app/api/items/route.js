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

export async function POST(request) {

    const key = request.headers.get('post-secret');
    if (key !== process.env.POST_SECRET) {
        return new Response(JSON.stringify({ error: 'unauthorized' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    try {
        const client = await pool.connect();

        const data = await request.json();

        const { brand, date, description, linkurl, isactive } = data;

        const query = 'INSERT INTO items (brand, date, description, linkurl, isactive) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [brand, date, description, linkurl, isactive];

        const result = await client.query(query, values);
        client.release();

        return new Response(JSON.stringify(result.rows[0]), {
            status: 201,
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