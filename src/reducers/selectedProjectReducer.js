import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function selectedProjectReducer(state = initialState.selectedProject, action) {
    switch(action.type) {
        case types.LOAD_PROJECT_SUCCESS:
            return action.project;
        case types.UNLOAD_PROJECT:
            return null;
        case types.DROP_STORE:
            return null;
        default:
            return state;
    }
}