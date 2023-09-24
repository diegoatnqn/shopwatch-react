import pink from "../images/pink.jpg";
import white from "../images/white.jpg";
import purple from "../images/purple.jpg";
import green from "../images/green.jpg";
import black from "../images/black.jpg";


const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Pink Strap',
            imageUrl: pink
        },
        {
            styleName: 'Black Strap',
            imageUrl: black
        },
        {
            styleName: 'Green Strap',
            imageUrl: green
        },
        {
            styleName: 'Purple Strap',
            imageUrl: purple
        },
        {
            styleName: 'White Strap',
            imageUrl: white
        }
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;