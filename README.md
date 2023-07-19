# Book App
This is a short app that lets the user create new books and edit them. Its made out of 4 components

## Working with Arrays and State
* Adding elements to the start of an array:
```javascript
    const [colors, setColors] = useState([]);
        const addColors = (newColor)=>{
        const updatedColors = [//-> creating new array
            newColor, //-> adding element
            ...colors //-> add all elements from the existing 'colors' array
        ];
        /*
        adding to the end
        */
        const addColors = (newColor)=>{
        const updatedColors = [//-> creating new array
            ...colors, //-> add all elements from the existing 'colors' array
            newColor, //-> adding element
        ];
        setColors(updatedColors);
    };
```

## Adding elements to the middle of an array
For this we will use ```.slice```. Its used to return a number of elements, like a collection of an array
```javascript
    const addColorsAtIndex = (newColor, index)=>{
        const updatedColors = [
            ...colors.slice(0, index), //we get from the first element to a given index
            newColor, //adding the new color before the index
            ...colors.slice(index) // add it all together, from the index to the end of the array
        ];
        setColors(updatedColors);
    }
```

## Removing elements from an array
* filtering a value
```javascript
    const [colors, setColors] = useState([
        'red','green','blue'
    ]);
    
    const removeColor = (colorToRemove) =>{
        const updatedColors = colors.filter((color)=>{
            return color !== colorToRemove
        });
        setColors(updatedColors);
    }

    /*Filter by an id */

    const [books, setBooks] = useState([
        {id: 1,title:'Demian'},
        {id: 2, title:'Necronomicon'}
    ])

    const removeBookById = (id)=>{
        const updatedBooks = books.filter((book)=>{
            return book.id !==id
        });
        setBooks(updatedBooks);
    }

```
* editing element in array based on a property
```javascript
    const [books, setBooks] = useState([
        {id: 1,title:'Demian'},
        {id: 2, title:'Necronomicon'}
    ])

    const updateBookById = (id, newTitle)=>{
        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, title : newTitle}; //recreating object and adding new title
            }
            return book;
        });
        setBooks(updatedBooks);
    }

```
why this syntax ``` return {...book, title : newTitle} ```?
Why do we create a new object of book when we find the book with
the given id?
This is because of the state management in REACT, when React sees that we're working with the same array then its not going to notice the change, so there wont be a re-render and create bugs. When modifying the object that way we avoid bugs.

* Adding or changing properties to an object

```javascript
    const [fruit, setFruit] = useState({
        color: 'red',
        name: 'apple'
    });

    const changeColor = (color)=>{
        const updatedFruit = {
            ...fruit, //copies all the properties of the object
            color: color
        };

        setFruit(updatedFruit);
    }
```
* Removing properties from an object.
For this destructuring is used
```javascript

    const [fruit, setFruit] = useState({
        color: 'red',
        name: 'apple'
    });

    const removeColor = ()=>{
        const {
            color, //list the property to remove
            ...rest //get all the other properties from the object
            } = fruit

        setFruit(rest);
    }

```

### useEffect
There are 3 ways of using it:
1. We want to call a function once when the component first renders
```javascript
    useEffect(()=>{
        console.log('hi')
    }, [])    
```
2. To call function after every rerender.
```javascript
    useEffect(()=>{
        console.log('hi')
    });
```
3. To call a function after component rerenders and a value has changed.
```javascript
    useEffect(()=>{
        console.log('hi')
    }, [counter])
```

## Communication using the Context System
This allows us to share data appwise instead of using props in components that have a parent-child relationship. Context is nor Redux nor a replacement for Props.
```javascript createContext``` from ```react``` is used.
1. Create context.
```javascript
    const BookContext = createContext();
    /*
    the BookContext obj has a Provider and a Consumer
    The provider specifies what data we want to share.
    <BookContext.Provider />
    */
```
2. Specify the data that will be shared.
So here we can do some data fetching and CRUD operations in Book Context like so:
```javascript
    const fetchBooks = async ()=>{
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data)
    }

    const createBook= async (title) =>{

        const response  = await axios.post('http://localhost:3001/books',
        {
           title
        });
       const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
    }

    const editBookById = async (id, newTitle)=>{
        const response = await axios.put('http://localhost:3001/books/'+id,{
            title: newTitle
        })
        const updatedBooks =  books.map((book)=>{
            if(book.id === id){
                return {...book, ...response.data}
            }
            return book;
        });
        setBooks(updatedBooks)
    }

    const deleteBookById = async (id) =>{
        const response = await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updatedBooks)
    }
```
What we want to do with the previous is share in the context so we do it like so:
```javascript
    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }
```
```javascript
    <BookContext.Provider value={5}>
        <MyComponent />
    </BookContext.Provider>
```
3. 'Consume' the data in a component
So now we want to get the book list that is fetched from the API
```javascript
    //BookList component
    const { books } = useContext(BooksContext);

    const renderedBooks = books.map((book)=>{
        return <BookShow key={book.id} book={book} />;
    })
```

Let's delete a book by it's ID, the BookShow Component still receives a ```book``` prop
```javascript
    const { deleteBookById } = useContext(BooksContext);
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = ()=>{
        deleteBookById(book.id)
    }
```