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
            ...colors.slice(0, index), //-> add all elements from the existing 'colors' array
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
            newColor,
            colors.slice(index)
        ];
        setColors(updatedColors);
    }
```