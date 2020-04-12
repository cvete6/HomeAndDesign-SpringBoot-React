import React, {Component} from 'react';

class ArchitectRow extends Component {
    render() {
        console.log(this.props.architect);
        //za sekoj proekt kako props go predavam cel proekt
        //kooi arhitecti gi imam na toj proekt
        return (
            <div>
                <div className="row pt-3">
                    <span className="col-12 text-left"><b>Project: {this.props.project.name}</b> </span>
                </div>
                <div className="row pt-3" >
                    <span className="col-12 text-left"><b>Description: </b>{this.props.project.description}</span>
                </div>
                <div className="row pt-3" >
                    <span className="col-12 text-left"><b>Project start: </b>{this.props.project.from}</span>
                </div>
                <div className="row pt-3" >
                    <span className="col-12 text-left"><b>Project end: </b>{this.props.project.to}</span>
                </div>
                <div className="row pt-3 pb-5" >
                    <span className="col-12 text-left"><b> Category: </b></span>
                </div>
            </div>
        );
    }
}

export default ArchitectRow;