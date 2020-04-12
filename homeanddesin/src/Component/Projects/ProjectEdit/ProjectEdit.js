import React,{useState,useEffect} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from '../../../custom-axios/axios';

const ProjectEdit = (props) => {

    const [term,setTerm] = useState({});//vo term gi imam architecto so imeto i prezimeto i idito
    const {id_architect} = useParams();
    const history = useHistory();

    console.log(id_architect);

    useEffect(() => {
        axios.get("/architects/id/"+id_architect).then((data)=>{
            setTerm(data.data);
        })
    },[])

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target.name.value);
        console.log(e.target.lastName.value);

        const newTerm= {

            "id": id_architect,
            "name":e.target.name.value,
            "lastName": e.target.lastName.value,
        }
        //console.log(newTerm);
        props.onsubmitt(newTerm);

        window.location.href="/architects";
        history.push("/architects");
    }

    const handleTermOnChange  = (e) => {
        const paramName = id_architect;
        const paramValue = e.target.value;
        setTerm({paramName:paramValue});
    }

    return (
        <div className="row">
            <form className="" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left mt-5">Edit Architect: </h4>
                <span className="fa-text-height"> </span>

                <div className="form-group row">
                    <label htmlFor="ingredient" className="col-sm-4 offset-sm-1 text-left">Architect name{term.name}</label>
                    <div className="col-sm-6">
                        <input type="text" value={term.name} name={"name"} onChange={handleTermOnChange} className="form-control" id="architect" placeholder="Architect name" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 offset-sm-1 text-left">lastName</label>
                    <div className="col-sm-6">
                        <input type="text" name={"lastName"} value={term.lastName} onChange={handleTermOnChange} className="form-control" id="amount" placeholder="lastName" maxLength="50"/>
                    </div>
                </div>

                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper">
                            Save
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-warning text-upper">
                            <Link to={"/architects"}>Reset</Link>
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            className="btn btn-danger text-upper">
                            <Link to={"/architects"}>Cencel</Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProjectEdit;
