import {
    COMMON_TESTE
} from '../actions/types';

export default ( state = {}, action ) => {
    switch(action.type){
        case COMMON_TESTE:
            return { ...state, teste: true };
        default:
            return state;
    }
}