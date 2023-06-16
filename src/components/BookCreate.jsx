import { useState } from "react";

function BookCreate({ onBookCreate }) {

    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
       event.preventDefault();
       onBookCreate(title);
       setTitle('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    type="text"
                    value={title}
                    onChange={handleChange}
                />
                <button>Add Book</button>
            </form>
        </div>
    );
}

export default BookCreate;
