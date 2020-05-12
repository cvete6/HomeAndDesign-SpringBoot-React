import React, {useState,useEffect} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from '../../../custom-axios/axios';
import ArchitectsService from "../../../repository/axiosArchitectRepository";
import '../ArchitectCss/Button.css'
import ArchitectRow from "./ArchitectRow";
import ProjectsService from "../../../repository/axiosProjectRepository";

const ArchitectDetail = (props)=> {
    //detali za arhitekto koe mu e imeto i na koi proekti raboti
    const [architect, setArchitect] = useState({});
    const [projects, setProjects] = useState([]);
    const {id_architect} = useParams();
    const history = useHistory();


    console.log(id_architect);

    useEffect(() => {
        axios.get("/architects/id/"+id_architect).then((data)=>{
            setArchitect(data.data);
        })
    },[])

    useEffect(() =>{
        ArchitectsService.getAllProjectByArchitectId(id_architect).then(response =>{
            setProjects(response.data);
        })
    },[]);



    let projectsView = projects.map(project => <ArchitectRow project={project}/>);

    if(projectsView.length === 0){
        projectsView=<span>none</span>
    }
    return (
        <div className="container-sm justify-content-center">
            <h4 className="text-upper text-left col-12">    </h4>

            <div className="row container-sm">
                <div className="col-12">
                    <h1 className="mt-5">Project from architect: {architect.name}</h1>
                    {projectsView}
                </div>
            </div>

            <div className="form-group row">
                <div className="offset-sm-1 col-12  text-center">
                    <button className="btn btn-secondary ">
                        <Link to={"/architects"}>Cencel</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArchitectDetail;
