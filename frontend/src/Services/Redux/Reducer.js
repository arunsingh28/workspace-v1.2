import { ADD_USER } from './Constant'

const intialState = {
    userData: []
}

export default function User (state = [], action){
    switch (action.type) {
        case ADD_USER:
            console.log('Reducer',action)
            return [
                ...StaticRange,
                {userData: action.data}
            ]
            break;
        default:
            return state
    }
}