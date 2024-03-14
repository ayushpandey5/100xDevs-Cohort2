import {atom, selector} from 'recoil'

export const todosAtom = atom({
    key: "todosAtom",
    default: []
})

export const searchAtom = atom({
    key: "searchAtom",
    default: ""
})

export const todosSelector = selector({
    key: "todosSelector",
    get: ({get}) => {
        const todos = get(todosAtom)
        const searchTerm = get(searchAtom)

        if(!searchTerm){
            return [];
        }
        const filtered = todos.filter((todo) => {
            //return todo.title.includes(searchTerm) || todo.description.includes(searchTerm)
            const titleMatch = todo.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            const descriptionMatch = todo.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            return titleMatch || descriptionMatch;
        })
        return filtered
    }
})