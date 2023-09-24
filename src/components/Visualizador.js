import React from 'react';
import ProductData from '../utils/Product';
import estiloProd from '../styles/Product.module.css';

const Visualizador = (props) => {
    let date = new Date();
    let colorActual = props.color;
    return (
        <div className={estiloProd.miniatura}>
            <img alt="imagen previsualizando color" className={estiloProd.imgreloj} src={ProductData.colorOptions[colorActual].imageUrl}></img>
            {/*Chang btn tim and clsius*/}
            {/*{props.currentFeature === 0 ? <div className={estiloProd.Time}>{date.getHours()}:{date.getMinutes()}</div> : <div className={estiloProd.heartRate}>COR</div>}*/}
        </div>
        );
}
export default Visualizador