// @ts-ignore
import {Actions} from "../actions/actions";

const initialState = {
    users: [],
}

const UsersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actions.getUsers:
            return {...state, users: payload};
        default:
            return state
    }
}

export default UsersReducer
