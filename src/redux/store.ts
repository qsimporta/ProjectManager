import {createStore, combineReducers} from "redux"
import GeneralReducer from "./reducers/GeneralReducer"
import UsersReducer from "./reducers/UsersReducer"

const Store = createStore(combineReducers({
    users: UsersReducer,
    general: GeneralReducer
}))

export default Store
