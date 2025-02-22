import React,  { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import { addBook } from '../actions/actions';


function BookForm() {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBook({title, author}));
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Book title" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                required />
            <input 
                type="text" 
                placeholder="Author" 
                value={author} 
                onChange={e => setAuthor(e.target.value)} />
            <input type="submit" value="Add book" />
        </form>
    );
}

export default BookForm;