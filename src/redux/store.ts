import {createStore, combineReducers} from "redux"
import GeneralReducer from "./reducers/GeneralReducer"
import UsersReducer from "./reducers/UsersReducer"
import ProjetosReducer from "./reducers/ProjetosReducer";

const Store = createStore(combineReducers({
    users: UsersReducer,
    general: GeneralReducer,
    projetos: ProjetosReducer
}))

export default Store
