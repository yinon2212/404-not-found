import React from "react";
import '../css/NotFoundTxt.css';

const NotFoundTxt = (props) => {
    return (
        <p className="not-found-text">{props.txt}</p>
    );
}


export default NotFoundTxt;