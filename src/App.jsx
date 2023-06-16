import { useState } from "react";
import BookCreate from "./components/BookCreate";
import './index.css'

function App (){
    const [books, setBooks] = useState([]);

    const handleBookCreate= (title) =>{
        console.log('title: ', title)
        const updatedBooks = [
            ...books,
            {id: 123, title: title}
        ]
        setBooks(updatedBooks)
    }

    const handleBookEdit = () =>{

    }

    return (
        <div>
            {books.length}
            <BookCreate onBookCreate={handleBookCreate}/>
        </div>
    )
}

export default App;