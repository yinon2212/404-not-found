import React from "react";
import '../css/Button.css';

const Button = (props) => {
    return (
        <button className="btn">{props.btnTxt}</button>
    );
}

export default Button;