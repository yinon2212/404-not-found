import React from "react";
import '../css/Image.css';


const Image = (props) => {
    return (
        <img className="image" src={props.imgSrc} />
    );
}


export default Image;