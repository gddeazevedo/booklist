import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { removeBook } from '../actions/actions';


function BookDetails({ book }) {
    const { dispatch } = useContext(BookContext);

    return (
        <li onClick={() => dispatch(removeBook(book.id))}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}

export default BookDetails;