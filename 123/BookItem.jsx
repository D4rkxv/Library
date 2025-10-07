import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function BookItem({ book, onToggleRead, onDelete, onUpdatePages }) {
    return (
        <div style={{ color: book.read ? "red" : "green" }}>
            <input
                type="checkbox"
                name="readed"
                id="readed"
                checked={book.read}
                onChange={() => onToggleRead(book.id)}
            />
            <h6>
                {book.read ? (
                    <>
                        <del>{book.title}</del> - <strong>{book.pages}</strong>
                    </>
                ) : (
                    <>
                        {book.title} - {book.pages}
                    </>
                )}
            </h6>

            <button onClick={() => onUpdatePages(book.id, 50)}>+50</button>
            <button onClick={() => onUpdatePages(book.id, -50)}>-50</button>
            <button onClick={() => onDelete(book.id)}>Usuń</button>
        </div>
    );
}

export default BookItem;
