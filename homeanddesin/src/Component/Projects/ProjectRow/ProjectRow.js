import React, {Component} from 'react';

class ProjectRow extends Component {
    render() {
        console.log(this.props.architect);
        //za sekoj proekt kako props go predavam cel proekt
        //kooi arhitecti gi imam na toj proekt
        return (
            <div>
            <div className="row pt-3">
                <span className="col-12 text-left d-inline-block"><b>Architect: {this.props.architect.name}</b> </span>
            </div>
            <div className="row pt-3 pb-5" >
                <span className="col-12 text-left"><b> Last name: </b>{this.props.architect.lastName}</span>
            </div>
            </div>
        );
    }
}

export default ProjectRow;