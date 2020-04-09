// @ts-ignore
import {Actions} from "../actions/actions"

const initialState = {
    userLogged: null,
    sidebarOpen: false,
    exitClicked: false,
}

const GeneralReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actions.setUserLogged:
            return {...state, userLogged: payload}
        case Actions.openSidebar:
            return {...state, sidebarOpen: payload}
        case Actions.clickExit:
            return { ...state, exitClicked: payload}
        default:
            return state
    }
}

export default GeneralReducer
