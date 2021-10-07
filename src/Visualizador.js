import React from 'react';
import ProductData from './Product';
import estiloProd from './Product.module.css';

const Visualizador = (props) => {
    let date = new Date();
    let colorActual = props.color;
    return (
        <div className={estiloProd.miniatura}>
            <img className={estiloProd.imgreloj} src={ProductData.colorOptions[colorActual].imageUrl}></img>
            {props.currentFeature == 0 ? <div className={estiloProd.Time}>{date.getHours()}:{date.getMinutes()}</div> : <div className={estiloProd.heartRate}>COR</div>}
        </div>
        );
}
export default Visualizador