import * as ActionTypes from '../actions/ActionTypes';


const bookReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BOOK:
            let id = state.length ? state.slice().pop().id + 1 : 1;
            let book = {...action.payload, id};
            return [...state, book];
        case ActionTypes.REMOVE_BOOK:
            return state.filter(book => book.id !== action.payload);
        default:
            return state;
    }
};


export default bookReducer;