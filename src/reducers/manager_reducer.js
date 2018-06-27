import { FETCH_MANDATA } from "../actions/index";
const initalState= {
    state :''
}
export default function(state = '', action){
    switch(action.type){
        case FETCH_MANDATA :
            state= initalState
            //return state.concat([action.payload.data])  //is similar to as below
            return [ action.payload.data, ...state ];
        default:
            return state
    }
}