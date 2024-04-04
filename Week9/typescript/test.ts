const x:number = 1
console.log(x)

// Types in function arguement and return type
function greeting(firstName:string):string {
    console.log(`Hello ${firstName}`)
    return `Hello!, ${firstName}`
}
console.log(greeting("Me"))

// Type in function arguement and Type inference, dont need to explicitly return number in function def.
function sum(num1: number,num2: number) : number{
    return num1 + num2
}
console.log(sum(1,2))

// Function aruements type definition
function delayedCall(fn: () => void){
    setTimeout(fn, 1000)
}

// With void return, you can still fuck up
const doSomething: () => void = () => {
    console.log("")
    return 5
}

interface User{
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    greet?(phrase: string): void
}


function isLegal(user:User):boolean {
    return user.age >= 18 ? true : false
}


//Class to implement interface
class EmployeeClass implements User{
    firstName: string
    lastName: string
    age: number
    email: string

    constructor(firstName:string,lastName:string,age:number,email:string){
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.age = age
    }

    greet(phrase: string): void {
        console.log(`${phrase}, ${this.firstName}`) 
    }
}

type Employee = {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    department: string
}

// Type can be interface too
// Interface can be implemented in Classes
// Interface can also be extended

interface Manager{
    designation: string
}

interface NewEmp extends Manager {
    date: string
}

const newEmp:NewEmp = {
    designation: "Intern",
    date: "2024/04/03"
}

type CEO = Employee & Manager

const ceo:CEO = {
    firstName: "string",
    lastName: "string",
    age: 22,
    email: "string",
    department: "string",
    designation: "string"
}



type StringorNumber = string | number;

function printId(id:StringorNumber):void {
    console.log(`ID: ${id}`)
}

printId(1)
printId("12")




const nums:number[] = [1,2,3,4,5,6,7,8,]


const userList: User[] = [
    {
        firstName: "Ayush",
        lastName: "Pandey",
        age: 23,
        email: "ayush@gmail.com",
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 17,
        email: "john@gmail.com",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 18,
        email: "jane@gmail.com",
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        age: 12,
        email: "alice@gmail.com",
    },
    {
        firstName: "Bob",
        lastName: "Smith",
        age: 9,
        email: "bob@gmail.com",
    }
]


function isLegalAge(userList: User[]):User[]{
    return userList.filter((user:User) => user.age >= 18)
}

console.log(isLegalAge(userList))


enum KeyDirections{
    UP,
    DOWN,
    LEFT,
    RIGHT
}

function keyPressed(key:KeyDirections){
    console.log(key)
}

keyPressed(KeyDirections.DOWN)



//Generics
type newInput = number | string

function firstElement(arr:newInput[]){ // cant be both in same array, only allow users to send one type of data
    return arr[0]
}

const val = firstElement(["hello", "my", 2])
console.log(val) //cant call String functions directly, since val is of type newInput.

// to solve this
// Can have any type of value
function getType<T>(arg:T){
    return arg
}

console.log(typeof getType<string>("string"))
console.log(typeof getType<number>(12))

function firstElem<T>(arr:T[]): T {
    return arr[0]
}

// can call native functions of the type.
console.log(firstElem<string>(["Cool","cccc","sadasd"]).toUpperCase())
console.log(firstElem<number>([1,2,3]).toFixed())

// Generics can also be complex values like custom types, interface

console.log(firstElem<User>([{
    firstName: "Ayush",
    lastName: "Pandey",
    age: 23,
    email: "ayush@gmail.com",
},
{
    firstName: "John",
    lastName: "Doe",
    age: 17,
    email: "john@gmail.com",
},
{
    firstName: "Jane",
    lastName: "Doe",
    age: 18,
    email: "jane@gmail.com",
},]))