import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface User{
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

async function insertUser(user: User){
    const res = await prisma.user.create({
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }
    })

    console.log(res)
}
insertUser({firstName:"Ayush", lastName: "Pandey", email: "4yushpandey@gmail.com", password: "password@123"})

async function updateUser(firstName:string, email:string){
    const res = await await prisma.user.update({
        where: {
            email: email
        },
        data: {
            firstName: firstName
        }
    })

    console.log(res)
}

updateUser("AyushP", "4yushpandey@gmail.com")

async function getUser(email:string){
    const res = await prisma.user.findFirst({
        where : {
            email: email
        },
        select: {
            email: true,
            firstName: true,
            lastName: true
        }
    })
    console.log(res)
}

getUser("4yushpandey@gmail.com")

async function deleteUser(email: string) {
    const res = await prisma.user.delete({
        where: {
            email: email
        }
    })
    console.log(res)
}

deleteUser("4yushpandey@gmail.com")