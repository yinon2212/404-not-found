import React from "react";
import '../css/Text.css';


const Text = (props) => {
    return (
        <p className="text">{props.txt}</p>
    );
}


export default Text;