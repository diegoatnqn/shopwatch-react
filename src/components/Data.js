import React from 'react';
import estiloProd from '../styles/Product.module.css';

const ProductDataDisplay = (props) => {

    const features=()=> {
        let featureDiv = props.featureArray.map((item, pos) => {
            return (
                <button onClick={() => {
                    props.cambiarFeature(pos)
                }
                } className={estiloProd.featureButton}> {item}</button>
            )
        });
        return featureDiv
    }
    const previsualizar = () => {
        console.log("COLOR ARRAY RECIBIDO" + props.colorArray)
            const miDiv = props.colorArray.map((item, pos) => {
                return (
                    <a href="/" /*onMouseEnter={() => props.cambiarColor(pos)}*/ onClick={(e) => {
                        e.preventDefault();
                        props.cambiarColor(pos);
                    }
                    }>
                        <img alt="mini watch color" src={item.imageUrl} className={estiloProd.relojMini}></img>
                    </a>
                )
            }
            );
            return miDiv
        }
    
    return (
        <div className={estiloProd.Texto}>
            <h3 className={estiloProd.colorSelect}>Select Color</h3>
            <div className={estiloProd.visualizarMiniWatches}>
                {previsualizar()}
            </div>
            <h3 className={estiloProd.colorSelect}>Features</h3>

            {features()
            }
            <br />
            <button className={estiloProd.botonComprar} > Comprar Ahora! </button>
        </div>)
}
export default ProductDataDisplay