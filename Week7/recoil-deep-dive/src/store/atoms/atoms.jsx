import {atom, selector} from 'recoil'
import axios from 'axios'
import { atomFamily } from 'recoil'
import { TODOS } from '../../todos'
import { selectorFamily } from 'recoil'

export const navAtom = atom({
    key: "networkAtom",
    default: {
        network: [1,1,1,1,1,1,1,1,1],
        jobs: [1,2,3,4,5],
        notification: [9,8,7,6,5,4,3,2,1],
        messages: [1,2,3,4,5]
    }
})

export const fetchNavAtom = atom({
    key: "fetchNavAtom",
    default: selector({
        key: "fetchNavSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

//use of atomFamily to dynamically create new atom for each Todos.
export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        return TODOS.find(todo => todo.id === id)
    }
})


//use selectorFamily inside atomFamily to get async data from backend
export const todosSelectorFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return res.data.todo
        } 
    })
    
})


export const navSelector = selector({
    key: "navSelector",
    get: ({get}) => {
        const navObject = get(navAtom)
        const total = Object.values(navObject).reduce((accumulator, item) => {
            return item.length + accumulator
        },0)
        return total
    }
})
