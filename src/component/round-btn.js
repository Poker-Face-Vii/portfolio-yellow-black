import React from "react";

//\\\\\\\\\   my-style     \\\\\\\\\\\
import "./round-btn.scss";


function _roundBtn (prop){
    return(
        <div className="round-btn" >
                <a className=" r-button" >{prop.text}</a>
        </div>
    );
}



export default _roundBtn;