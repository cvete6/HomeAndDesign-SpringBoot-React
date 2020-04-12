import {Component} from "react";
import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const SectionComponent = (props) =>{
    return(
        <div className={"container pt-5 mb-3"}>
            {props.children}
        </div>
    )
}
export default SectionComponent;