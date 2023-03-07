import React from 'react';
import dark_logo from "./../../images/ap_dark_logo.png";
import light_logo from "./../../images/ap_dark_logo.png";



const Logo = props => {
    var styleInput = localStorage.getItem("current-style");
    let imageURL = "";

    // get proper image
    if (styleInput === "style2"){
        imageURL = dark_logo;
    } else {
        imageURL = light_logo;
    }
           
    return <div>
       <div>
           <img alt="Logo" src={imageURL} height = "100px"/>
       </div>

    </div>;
};

export default Logo;