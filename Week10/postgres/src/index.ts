import {Client} from 'pg'

// const client = new Client({
//     user: "ayush",
//     database: "100xdevs",
//     password: '',
//     port: 5432,
//     host: "localhost"
// })

const client = new Client({
    connectionString: "postgresql://ayush@localhost/100xdevs"
})

async function createUser(){
    await client.connect()
    const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`)
    console.log(result)
}

createUser()
