import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tokenReducer(state = initialState.tokens, action) {
    switch(action.type) {
        case types.LOAD_TOKENS_SUCCESS:
            return action.tokens;
        case types.DROP_STORE:
            return {access_token: null};
        default:
            return state;
    }
}