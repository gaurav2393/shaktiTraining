import * as types from '../constants/ActionTypes.js';

export function incrementFunction() {
    return {
        type: types.INCREMENT_COUNTER
    }
}

export function decrementFunction() {
    return {
        type: types.DECREMENT_COUNTER
    }
}