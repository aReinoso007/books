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
            return !== colorToRemove
        });
        setColors(updatedColors);
    }

```