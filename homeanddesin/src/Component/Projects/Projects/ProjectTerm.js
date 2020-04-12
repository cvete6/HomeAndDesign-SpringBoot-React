import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../ProjectCss/Button.css';

class ProjectTerm extends Component {
    render() {
        return (
            <tr  className="align-content-center">
                <td  scope="col" className="text-center">{this.props.term.name}</td>
                <td  scope="col">{this.props.term.description}</td>
                <td  scope="col">{this.props.term.from}</td>
                <td  scope="col">{this.props.term.to}</td>
                <td  scope="col"></td>

                <td  scope="col" >
                    <button className="btn btn-outline-dark" title="Details">
                        <Link to={"/projects/id_project/"+this.props.projectId}><i className="fa fa-asterisk" aria-hidden="true"><strong> Details</strong></i></Link>
                    </button>

                    <button className="btn btn-outline-dark" title="Edit">
                        <Link to={"/projects/edit/"+this.props.projectId}><i className="fa fa-edit" aria-hidden="true"><strong> Edit</strong></i></Link>
                    </button>

                    <button className=" btn btn-outline-dark" title="Delete" onClick={() => this.props.onDelete(this.props.projectId)}>
                        <i className="fa fa-trash"> <strong> Remove</strong></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProjectTerm;

