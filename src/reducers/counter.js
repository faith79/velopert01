import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};
//스프레드 문법????
export default function counter(state = initialState, action) {
    /* ... */
    switch(action.type) {
        case types.INCREMENT:
            return {
                number: state.number + 1                
            }
            /*return [
                ...state,{
                number: state.number + 1,
                dumbObject: [...state.dumbObject,{u: 0 }]
            }];*/
        case types.DECREMENT: 
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}
