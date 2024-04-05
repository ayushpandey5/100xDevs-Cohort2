import { Client } from 'pg'

// const client = new Client({
//     user: "ayush",
//     database: "100xdevs",
//     password: '',
//     port: 5432,
//     host: "localhost"
// })

interface User {
    username: string,
    email: string,
    password: string
}

interface Address {
    city: string,
    country: string,
    street: string,
    pincode: number,
}

const client = new Client({
    connectionString: "postgresql://ayush@localhost/100xdevs"
})

// async function createUserTable(){
//     await client.connect()
//     const result = await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );`)
//     console.log(result)
// }
// createUserTable()

// async function createAddressTable(){
//     await client.connect()
//     const result = await client.query(`
//     CREATE TABLE address (
//         id SERIAL PRIMARY KEY,
//         user_id INTEGER NOT NULL,
//         city VARCHAR(100) NOT NULL,
//         country VARCHAR(100) NOT NULL,
//         street VARCHAR(255) NOT NULL,
//         pincode VARCHAR(20),
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//         FOREIGN KEY (user_id) REFERENCES users(id) on DELETE CASCADE
//     );`)
//     console.log(result)
//     await client.end()
// }
// createAddressTable()

// async function insertData(username: string, email: string, password: string) {
//     try {
//         await client.connect()
//         const query = "INSERT into users (username, email, password) values ($1,$2,$3)"
//         const result = await client.query(query, [username, email, password])
//         console.log(result)
//     } catch (error) {
//         console.error(error)
//     } finally {
//         await client.end()
//     }
// }
// insertData("ayush", "ayush@gmail.com", "myPassword@1").catch(e => console.error(e))

// async function getUser(email:string) {
//     await client.connect();
//     try{
//         const query = "SELECT * from users where email = $1"
//         const result = await client.query(query, [email])
//         result.rows.length > 0 ? console.log(result.rows[0]) : console.log("No user found")
//     } catch (error) {
//         console.error(error)
//     } finally {
//         await client.end()
//     }
// }
// getUser("ayush@gmail.com")


// async function insertUserAddress(user:User, address: Address) {
//     await client.connect()
//     try {
//         await client.query('BEGIN')
//         const userQuery = `INSERT into users (username, email, password) VALUES ($1,$2,$3) RETURNING id`
//         const result = await client.query(userQuery, [user.username, user.email, user.password])
//         const user_id = result.rows[0].id
//         const addressQuery = `
//         INSERT INTO address (user_id, city, country, street, pincode)
//         VALUES ($1, $2, $3, $4, $5);`
//         const addressResult = await client.query(addressQuery, [user_id,address.city,address.country,address.street,address.pincode])
//         await client.query('COMMIT')
//         console.log(addressResult)
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.error(error)
//         throw error;
//     } finally {
//         await client.end()
//     }
// }

// insertUserAddress({
//     username: "Ayush",
//     email: "4yushpandey@gmail.com",
//     password: "SecretPassword@123",
// },{
//     city: "Hobart",
//     country: "Australia",
//     street: "132 Gordons Hill Rd",
//     pincode: 7015,

// })

async function join(userID:string){
    await client.connect()
    try {
        const query = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
                        FROM users u
                        JOIN address a ON u.id = a.user_id
                        WHERE u.id = $1` 
        const result = await client.query(query, [userID])
        result.rows.length > 0 ? result.rows[0] : 'Cannot find data'
        console.log(result.rows[0])
    } catch (error) {
        console.error(error)
        throw error
    } finally {
        await client.end()
    }
}

join("3")

