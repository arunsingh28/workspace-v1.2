import { Userr } from './Constant'

export const addUser = (data) => {
    return {
        type: ADD_TO_CART,
        data
    }
}


export const removeUser = (data) => {
    return {
        type: 'REMOVE',
        data
    }
}

