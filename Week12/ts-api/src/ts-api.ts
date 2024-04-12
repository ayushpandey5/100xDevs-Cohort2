// interface User {
//     name:string;
//     age:number;
// }

// function sumOfAge(users:User[]):number {
//     return users.reduce((acc,user) => acc + user.age , 0)
// }

// const users = [{name: "ayush",age: 24},{name: "ayush",age: 24},{name: "ayush",age: 24}]
// console.log(sumOfAge(users))


//Pick
interface User {
    name:string;
    age:number;
    email:string;
    password:string;
}

type UpdateProps = Pick<User,'name'| 'age' | 'password'>

function displayProps(user:UpdateProps){
   console.log(user.name, user.age, user.password)
}

//Partial
type OptionalType = Partial<User>

function partialDisplay(user:OptionalType){
    console.log(user)
}

//ReadOnly
interface ReadConfig{
    readonly endpoint: string
    readonly apiKey:string
}

const config:Readonly<ReadConfig> = {
    endpoint: "https://ayushpandey.dev",
    apiKey: 'asasdjhh3i71yaksnda'
}

//config.apiKey = "asdsad"  => cannot change properties unlike const objects as this is readonly


// Records and Map
interface RecordUser {
    name: string,
    age: number
}

// have key string to reach field, just like HashMap
type UserRec = Record<string,RecordUser>

const users:UserRec = {
    'abc': {name: "Ayush", age: 24},
    'def': {name: "Ayush", age: 24}
}

// Map
const userMap = new Map<string, RecordUser>();

userMap.set("abc", {name:"Ayush", age: 24})
userMap.set("def", {name:"NewUser", age: 19})

console.log(userMap)
console.log(userMap.get('abc'))
