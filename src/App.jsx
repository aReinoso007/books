import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import './index.css'

function App (){
    const [books, setBooks] = useState([]);

    const handleBookCreate= (title) =>{
        const updatedBooks = [
            ...books,
            {id: Math.round(Math.random()*999), title}
        ]
        setBooks(updatedBooks)
    }

    const editBookById = (id, newTitle)=>{
        const updatedBooks =  books.map((book)=>{
            if(book.id === id){
                return {...book, title: newTitle}
            }
            return book;
        });
        setBooks(updatedBooks)
    }

    const deleteBookById = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updatedBooks)
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            <BookCreate onBookCreate={handleBookCreate}/>
        </div>
    )
}

export default App;