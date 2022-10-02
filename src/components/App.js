import React from "react";
import Text from "./Text";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Image from "./Image";
import NotFoundTxt from "./NotFoundTxt";
import '../css/App.css';

const App = () => {
    return (
        <div className="container">
            
            <NotFoundTxt txt="404 not found" />

            <div className="body">
                <Image imgSrc="./res/Scarecrow.png" />
                <div className="details">
                    <Text txt="I have bad news for you" />
                    <Paragraph 
                        txt="The page you are looking for might be removed or is temporarily unavailable"
                    />
                    <Button btnTxt="back to homepage" />
                </div>
                
                
            </div>
        </div>
    );
}

export default App;