import React, { Component } from 'react';
import Product from './Product';
import './styles.css';
import estiloProd from './Product.module.css';
import Visualizador from './Visualizador';
import ProductDataDisplay from './Data';
import Header from './Header';
class App extends React.Component {
    state = {
        title: Product.title,
        description: Product.description,
        colorActual: 0,
        colorArray: Product.colorOptions,
        currentFeature: 0,
        featureArray: Product.featureList

    };
    cambiarColor = (nuevoColor) => {
        const newColorPos = nuevoColor;
        this.setState({ colorActual: newColorPos })
    }
    
    cambiarFeature = (nuevoFeature) => {
        const newFeaturePos = nuevoFeature;
        this.setState({ currentFeature: newFeaturePos })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="main">
                    <div className={estiloProd.container}>
                        <Visualizador currentFeature={this.state.currentFeature} color={this.state.colorActual} />

                        <ProductDataDisplay title={this.state.title} description={this.state.description}
                            colorArray={this.state.colorArray} featureArray={this.state.featureArray}
                            cambiarColor={this.cambiarColor} cambiarFeature={this.cambiarFeature} />
                    </div>
                </div>
            </div>
        );
    }
    
}

//State y Arreglo De Blogcards
  //showBlogs: true,

        //miObjeto :[
        //    {
        //        id: 1,
        //        nombre: "John",
        //        apellido: "Wick",
        //        edad: 33,
        //        job: "Lider de puesto",
        //        count: 10

        //    },
        //    {
        //        id: 2,
        //        nombre: "John",
        //        apellido: "Connor",
        //        edad: 32,
        //        job: "Lider de puesto",
        //        count: 0

        //    },
        //    {
        //        id: 3,
        //        nombre: "John",
        //        apellido: "Salchichon",
        //        edad: 31,
        //        job: "Lider de puesto",
        //        count: 0

        //    }
        //]


//Render de blogcards

        //const blogCards = isArrayEmpty(this.state.miObjeto) ? [] : this.state.miObjeto.map((item, pos) => {

        //    return (
        //        <BlogItem key={pos} nombre={item.nombre} apellido={item.apellido} id={item.id} count={item.count} onLikeButtonClicked={this.onLikeButtonClicked} position={pos} />
        //    )
        //});
//onLikeButtonClicked = (pos) => {
//    const updatedList = this.state.miObjeto;
//    const updatedObj = updatedList[pos];
//    updatedObj.count = updatedObj.count + 1;
//    updatedList[pos] = updatedObj;

//    this.setState({ miObjeto: updatedList })
//    console.log(updatedObj)
//}


//hideButtonClick = () => {
//    //let updatedState = !this.state.showBlogs;
//    this.setState((prevState, prevProps) => {
//        return { showBlogs: !prevState.showBlogs }
//    });
//}
export default App;
