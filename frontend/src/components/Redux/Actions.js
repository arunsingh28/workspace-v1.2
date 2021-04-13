import { ADD_USER } from './Constant'

export const addUser = (data) => {
    return {
        type: ADD_USER,
        data: data
    }
}


// export const removeUser = (data) => {
//     return {
//         type: 'REMOVE',
//         data
//     }
// }

