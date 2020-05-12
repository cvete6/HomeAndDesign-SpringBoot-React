import React, {Component} from 'react';
import ProjectsService from "../../../repository/axiosProjectRepository";

class ArchitectRow extends Component {


    constructor(props) {
        super(props)
        this.state={
            items: [],

        }
    }
    componentDidMount() {
        this.loadCategory();
    }
    loadCategory = () => {
        ProjectsService.getCategoryFromProject(this.props.project.id).then((response) => {

            this.setState({
                items: response.data.projectType
            })
        }).catch(error => {
            console.log(error)
        });
    }

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
                    <span className="col-12 text-left"><b> Category:</b> {this.state.items} </span>
                </div>
            </div>
        );
    }
}

export default ArchitectRow;