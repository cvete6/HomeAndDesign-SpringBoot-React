import React, {Component} from 'react';
import ProjectTerm from "./ProjectTerm";
import {Link} from "react-router-dom";
import MyCalendar from "../../../Calendar/Calendar";


class Projects extends Component {

    componentDidMount(){
        this.props.onPageClick();
    }
    render() {
        const singleProjects = this.props.terms.map( term =>{
            return <ProjectTerm key={term.id} projectId={term.id} term={term} onDelete={this.props.onDelete}/>
            }
            //term =>  <div key={term.id}>{term.name}</div>
        )

        let ListSize=this.props.terms.length;

        const renderPage=()=> {
            if (ListSize != 0)
                return (
                    <div className="row container" id="width">
                        <div className="table-responsive">
                            <h4 className="text-upper text-center text-xl-left">Projects:</h4>
                            <table className="table tr-history table-striped small">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Start project</th>
                                    <th scope="col">End project</th>
                                    <th scope="col">Category</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {singleProjects}
                                </tbody>
                            </table>

                        </div>
                        <div className="row container-sm w-75 pb-3">
                            <div className="col-6 text-right">
                                <button className="btn btn-outline-secondary">
                                    <Link className="nav-link" to={"/projects/calendar"}>Calendar of Events</Link>
                                </button>
                            </div>
                            <div className="col-6 text-right">
                                <button className="btn btn-outline-secondary">
                                    <Link className="nav-link" to={"/projects/new"}>Add new architect</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                )
            else return <div className="pt-xl-5">
                <h1 className="pt-xl-5">
                    No projects in the system.
                </h1>
                <div className="row container-sm w-75">
                    <div className="col-12 text-right">
                        <button className="btn btn-outline-secondary">
                            <Link className="nav-link" to={"/projects/calendar"}>Calendar of Events</Link>
                        </button>
                    </div>
                    <div className="col-12 text-right">
                        <button className="btn btn-outline-secondary">
                            <Link className="nav-link" to={"/projects/new"}>Add new architect</Link>
                        </button>
                    </div>
                </div>
            </div>
        }
        return (
            <div>
                {renderPage()}
            </div>
        )
    }
}

export default Projects;