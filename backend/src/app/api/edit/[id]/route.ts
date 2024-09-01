import { Client } from 'pg';
import dotenv from 'dotenv';
const bcrypt = require('bcrypt');

dotenv.config();
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});
client.connect();
export async function PUT(request:Request, {params}: {params: {id: number}}) {
    try {
        const { firstname, lastname , username ,password } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        const res = await client.query('UPDATE tbl_users SET firstname = $1, lastname = $2, username = $3, password = $4 WHERE id = $5 RETURNING *', [firstname, lastname, username, hashedPassword, params.id]);
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