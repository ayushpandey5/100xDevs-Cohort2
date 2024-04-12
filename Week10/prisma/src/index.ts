import { PrismaClient } from '@prisma/client'
import { describe } from 'node:test'
const prisma = new PrismaClient()

interface User{
    firstName: string,
    lastName: string,
    email: string,
    type: string,
    password: string
}

// async function insertUser(user: User){
//     const res = await prisma.user.create({
//         data: {
//             firstName: user.firstName,
//             lastName: user.lastName,
//             email: user.email,
//             type: user.type,
//             password: user.password
//         }
//     })
//     console.log(res)
// }
// insertUser({firstName:"Ayush", lastName: "Pandey", type: "admin", email: "4yushpandey@gmail.com", password: "password@123"})

// async function updateUser(firstName:string, email:string){
//     const res = await await prisma.user.update({
//         where: {
//             email: email
//         },
//         data: {
//             firstName: firstName
//         }
//     })

//     console.log(res)
// }

// updateUser("AyushP", "4yushpandey@gmail.com")

// async function getUser(email:string){
//     const res = await prisma.user.findFirst({
//         where : {
//             email: email
//         },
//         select: {
//             email: true,
//             firstName: true,
//             lastName: true,
//             type: true
//         }
//     })
//     console.log(res)
// }

// getUser("4yushpandey@gmail.com")

// async function deleteUser(email: string) {
//     const res = await prisma.user.delete({
//         where: {
//             email: email
//         }
//     })
//     console.log(res)
// }

// deleteUser("4yushpandey@gmail.com")

// async function addTodo(userId:number) {
//     const res = await prisma.todo.create({
//         data: {
//             title: "Go to Gym",
//             description: "At 6PM",
//             done: false,
//             userId: userId
//         }
//     })
//     console.log(res)
// }

// addTodo(1)

// async function getTodosWithUser(userId:any) {
//     const res = await prisma.todo.findMany({
//         where: {
//             userId:userId
//         }
//     })
//     console.log(res)
// }

// getTodosWithUser(1)

// Join

async function getTodoAndUserDetails(userId:number) {
    const res = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            //user: true // for whole user object
            user: {
                select: {
                    firstName:true,
                }
            },
            title: true,
            description: true
        }
    })
    console.log(res)
}

getTodoAndUserDetails(1)