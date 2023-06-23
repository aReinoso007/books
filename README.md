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
* editing elements based on a property
```javascript
    const [books, setBooks] = useState([
        {id: 1,title:'Demian'},
        {id: 2, title:'Necronomicon'}
    ])

    const updateBookById = (id, newTitle)=>{
        const updatedBooks = books.map((book)=>{
            if(book.id === id){
                return {...book, title : newTitle};
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
