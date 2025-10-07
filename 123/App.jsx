import React from "react";
import BookItem from "./BookItem";

function App() {
    const [bookList, setBookList] = React.useState([
        { id: 1, title: "Harry Potter", pages: 350, read: false },
        { id: 2, title: "Władca Pierścieni", pages: 500, read: true },
        { id: 3, title: "Wiedźmin", pages: 300, read: false },
        { id: 4, title: "1984", pages: 250, read: true },
        { id: 5, title: "Hobbit", pages: 400, read: false }
    ]);

    // ✅ Zmiana stanu - odwraca wartość read
    const onToggleRead = (id) => {
        setBookList(prevList =>
            prevList.map(book =>
                book.id === id ? { ...book, read: !book.read } : book
            )
        );
    };

    // ✅ Usunięcie książki - użycie filter
    const onDelete = (id) => {
        setBookList(prevList => prevList.filter(book => book.id !== id));
    };

    // ✅ Aktualizacja liczby stron
    const onUpdatePages = (id, newPages) => {
        setBookList(prevList =>
            prevList.map(book =>
                book.id === id
                    ? { ...book, pages: Math.max(50, book.pages + newPages) }
                    : book
            )
        );
    };

    return (
        <>
            {bookList.map(book => (
                <BookItem
                    key={book.id}
                    book={book}
                    onToggleRead={onToggleRead}
                    onDelete={onDelete}
                    onUpdatePages={onUpdatePages}
                />
            ))}
        </>
    );
}

export default App;
