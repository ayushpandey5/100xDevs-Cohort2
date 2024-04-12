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

