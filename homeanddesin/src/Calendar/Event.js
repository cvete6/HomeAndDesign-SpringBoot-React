import React, {Component} from 'react';

class Event extends Component {
    render() {
        console.log(this.props.proekt);
        //za sekoj proekt kako props go predavam cel proekt
        //kooi arhitecti gi imam na toj proekt

        const proekti= this.props.proekt;
        const Handle =() => {
            proekti.map((p, index) =>  {return(
                <div key={index}>
                    {p.name}
                </div>
            )
            })
        }
        return (
            <div>
                <div className="row pt-3">
                    <span className="col-12 text-left d-inline-block"><b>Architect: {this.props.proekt.name}</b> </span>
                </div>
                <div className="row pt-3 pb-5" >
                    <span className="col-12 text-left"><b> Last name: </b>{Handle}</span>
                </div>
            </div>
        );
    }
}

export default Event;