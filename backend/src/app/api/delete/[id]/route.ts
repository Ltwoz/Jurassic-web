import { Client } from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});
client.connect();
export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try {
        const res = await client.query('DELETE FROM tbl_users WHERE id = $1 RETURNING *', [params.id]);
        if (res.rows.length === 0) {
            return new Response(JSON.stringify({ error: 'User not found' }), {
                status: 404,
                headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
            });
        }
        return new Response(JSON.stringify(res.rows[0]), {
            status: 200,
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        });
    }
}