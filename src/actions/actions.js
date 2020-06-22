import * as ActionTypes from '../actions/ActionTypes';

export const addBook = book => ({
    type: ActionTypes.ADD_BOOK,
    payload: book
});

export const removeBook = id => ({
    type: ActionTypes.REMOVE_BOOK,
    payload: id
});