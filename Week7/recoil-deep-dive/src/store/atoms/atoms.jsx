import {atom, selector} from 'recoil'

export const navAtom = atom({
    key: "networkAtom",
    default: {
        network: [1,1,1,1,1,1,1,1,1],
        jobs: [1,2,3,4,5],
        notification: [9,8,7,6,5,4,3,2,1],
        messages: [1,2,3,4,5]
    }
})
