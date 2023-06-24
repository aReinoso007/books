import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import './index.css'

function App (){
    const [books, setBooks] = useState([]);

    const handleBookCreate= (title) =>{
        console.log('title: ', title)
        const updatedBooks = [
            ...books,
            {id: Math.round(Math.random()*999), title}
        ]
        setBooks(updatedBooks)
    }

    const deleteBookById = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updatedBooks)
    }

    const handleBookEdit = () =>{

    }

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById} />
            <BookCreate onBookCreate={handleBookCreate}/>
        </div>
    )
}

export default App;