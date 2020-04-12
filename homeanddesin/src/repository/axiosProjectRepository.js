import axios from '../custom-axios/axios'
import qs from 'qs'

const ProjectsService = {
    fetchProjects: ()=> {
        return axios.get("/projects");
    },
    fetchProjectsEvents: ()=> {
        return axios.get("/projects/events");
    },

    getAllProjectByProjectId: (id)=> {
        return axios.get(`/projects/id_project/${id}`)
    },

    getProjectById: (id)=>{
        return axios.get(`/projects/id/${id}`)
    },

    addProjectTerm: (term) => {
        console.log(term);
        const data = {
            ...term,
            name:term.name
        }
        console.log(data);
        const formParams = qs.stringify(data);
        return axios.post("/projects",formParams)
    },

    updateProjectTerm : (term) => {
        const data = {
            ...term,
        }
        const id= term.id;
        console.log(id);
        console.log(data);
        const formParams = qs.stringify(data);
            return axios.patch(`/projects/edit/${id}`,formParams,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    deleteProjectTerm: (id)=> {
        return axios.delete(`/projects/${id}`);
    }
}

export default ProjectsService;