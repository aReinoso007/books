import { useState } from "react";
import BookCreate from "./components/BookCreate";
import './index.css'

function App (){
    const [books, setBooks] = useState([]);

    const handleBookCreate= (title) =>{
        console.log('title: ', title)
    }

    const handleBookEdit = () =>{

    }

    return (
        <div>
            <BookCreate onBookCreate={handleBookCreate}/>
        </div>
    )
}

export default App;