import { useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import './index.css'
import useBooksContext from "./hooks/use-book-context";

function App (){

    const {fetchBooks} = useBooksContext();

    useEffect(()=>{
        fetchBooks();
    }, [fetchBooks])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList  />
            <BookCreate />
        </div>
    )
}

export default App;