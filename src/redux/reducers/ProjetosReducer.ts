// @ts-ignore
import {Actions} from "../actions/actions";

const initialState = {
    projetos: [],
    projetoSelected: null,
}

const ProjetosReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Actions.setProjetos:
            return {...state, projetos: payload}
        case Actions.selectProjeto:
            return {...state, projetoSelected: payload}
        default:
            return state
    }
}

export default ProjetosReducer
