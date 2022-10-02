import React from "react";
import '../css/Paragraph.css';


const Paragraph = (props) => {
    return (
        <p className="paragraph">{props.txt}</p>
    );
}


export default Paragraph;