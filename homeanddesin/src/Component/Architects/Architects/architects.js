import React, {Component} from 'react';
import ArchitectTerm from "./ArchitectTerm";
import {Link} from "react-router-dom";


class Architects extends Component {

    componentDidMount(){
        this.props.onPageClick();
    }
    render() {
        const singleIngredients = this.props.terms.map( term =>{
            return <ArchitectTerm key={term.id} architectId={term.id} term={term} onDelete={this.props.onDelete}/>
            }
            //term =>  <div key={term.id}>{term.name}</div>
        )

        let ListSize=this.props.terms.length;

        const renderPage=()=> {
            if (ListSize != 0)
                return (
                    <div className="row container" id="width" >
                        <div className="table-responsive">
                            <h4 className="text-upper text-center text-xl-left">ARCHITECTS:</h4>
                            <table className="table tr-history table-striped small">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">LastName</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {singleIngredients}
                                </tbody>
                            </table>

                        </div>
                        <div className="row">
                            <div className="col-8">

                            </div>
                            <div className="col-12 text-right">
                                <button className="btn btn-outline-secondary">
                                    <Link className="nav-link" to={"/architects/new"}>Add new architect</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            else return <div className="pt-xl-5">
                <h1> </h1>
                <h1 className="pt-xl-5">
                No architects in the system.
                </h1>
                    <div className="row">
                        <div className="col-8">

                        </div>
                        <div className="col-12 text-right">
                            <button className="btn btn-outline-secondary">
                                <Link className="nav-link" to={"/architects/new"}>Add new architect</Link>
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

export default Architects;