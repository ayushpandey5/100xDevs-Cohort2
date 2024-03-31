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
    email: string
}


function isLegal(user:User):boolean {
    return user.age >= 18 ? true : false
}