import React, {useState,useEffect} from 'react';
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from '../../../custom-axios/axios';
import ArchitectsService from "../../../repository/axiosArchitectRepository";
import ProjectRow from "../../../Component/Projects/ProjectRow/ProjectRow";
import '../ProjectCss/Button.css'

const ProjectDetail = (props)=> {
    //detali za arhitekto koe mu e imeto i na koi proekti raboti
    const [project, setProject] = useState({});
    const [architects, setArchitecs] = useState([]);
    const {id_project} = useParams();
    const history = useHistory();


    console.log(id_project);

    useEffect(() => {
        axios.get("/projects/id/"+id_project).then((data)=>{
            setProject(data.data);
        })
    },[])

    useEffect(() =>{
        ArchitectsService.getAllArchitectByProjectId(id_project).then(response =>{
            setArchitecs(response.data);
        })
    },[]);


    let projectsView = architects.map((architect,index) => <ProjectRow architect={architect} key={index}/>);

    if(projectsView.length === 0){
        projectsView=<span>none</span>
    }
    return (
        <div >
            <h4 className="text-upper text-left col-12">   </h4>

            <div className="row container-sm">
                <div className="col-12">
                    <h1 className="mt-5">Architects who work on project: {project.name}</h1>
                    {projectsView}
                </div>
            </div>

            <div className="form-group row">
                <div className="offset-sm-1 col-12  text-center">
                    <button className="btn btn-secondary ">
                        <Link to={"/projects"}>Cencel</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
