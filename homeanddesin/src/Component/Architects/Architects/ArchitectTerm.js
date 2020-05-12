import React, {Component, useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import  '../ArchitectCss/Button.css';
import axios from "../../../custom-axios/axios";
import ArchitectsService from "../../../repository/axiosArchitectRepository";

const ArchitectTerm = (props) => {



           const [projects, setProjects] = useState([]);
           const history = useHistory();

           useEffect(() => {
               ArchitectsService.getAllProjectByArchitectId(props.architectId).then(response => {
                   setProjects(response.data);
               })
           }, []);

    const HandleRemove=()=> {
           debugger;
           console.log(projects);
           if(projects.length === 0){
               debugger;
               props.onDelete(props.architectId)
           }
           else {
               console.log(props.architectId);
               alert("ima proekti povrzani so arhitectot !!!!");
               history.push("/architects/id_architect/" + props.architectId)
               }
       }

        return (
            <tr  className="align-content-center">
                <td  scope="col" className="text-center">{props.term.name}</td>
                <td  scope="col">{props.term.lastName}</td>
                <td  scope="col" >
                    <button className="btn btn-outline-dark" title="Details">
                        <Link to={"/architects/id_architect/"+props.architectId}><i className="fa fa-asterisk" aria-hidden="true"><strong> Details</strong></i></Link>
                    </button>

                    <button className="btn btn-outline-dark" title="Edit">
                        <Link to={"/architects/edit/"+props.architectId}><i className="fa fa-edit" aria-hidden="true"><strong> Edit</strong></i></Link>
                    </button>

                    <button className=" btn btn-outline-dark" title="Delete" onClick={HandleRemove}>
                        <i className="fa fa-trash"> <strong> Remove</strong></i>
                    </button>
                </td>
            </tr>
        )

}

export default ArchitectTerm;

//<button className=" btn btn-outline-dark" title="Delete" onClick={() => this.props.onDelete(this.props.architectId)}>