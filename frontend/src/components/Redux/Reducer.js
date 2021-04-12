import { Userr } from './Constant'

const intialState = {
    userData: []
}

export default User = (state = intialState, action) => {
    switch (action.type) {
        case Userr:
            return {
                ...StaticRange,
                userData: action.data
            }
            break;
        default:
            return state
    }
}