import React from 'react';
import { dumpLogs } from './utils';

import classes from './blogCard.module.css';

const BlogCard =(props)=> {
    
    const likeButtonClicked = () => {
        this.setState((prevState, prevProp) => {
            return { count: prevState.count + 1 }
        });
    }
    
        dumpLogs(props);
        return (
            <div className={classes.misCards}>
                <h3>{props.nombre}</h3>
                <p>{props.apellido}</p>
                <p>edad: {props.id}</p>
                <br />
                <p>contador :<span className={classes.ContadorLikes}>{props.count}</span></p>
                <button onClick={()=>props.onLikeButtonClicked(props.position)}> LIKE </button>
            </div>
        )
    
}

export default BlogCard; //Defaul export