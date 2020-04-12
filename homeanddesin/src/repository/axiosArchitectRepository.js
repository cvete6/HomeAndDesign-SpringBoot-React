import axios from '../custom-axios/axios'
import qs from 'qs'

const ArchitectsService = {
    fetchArchitects: ()=> {
        return axios.get("/architects");
    },

    getAllArchitectByProjectId: (id)=> {
        return axios.get(`/architects/project/${id}`)
    },

    getAllProjectByArchitectId: (id)=> {
        return axios.get(`/architects/id_architect/${id}`)
    },

    getArchitectById: (id)=>{
        return axios.get(`/architects/id/${id}`)
    },

    addArchitectTerm: (term) => {
        console.log(term);
        const data = {
            ...term,
            name:term.name//obj imase room pa nov obj pa name posle
            //
        }
        console.log(data);
        const formParams = qs.stringify(data);
        return axios.post("/architects",formParams)
    },

    updateArchitectTerm : (term) => {
        const data = {
            ...term,
        }
        const id= term.id;
        console.log(id);
        console.log(data);
        const formParams = qs.stringify(data);
            return axios.patch(`/architects/edit/${id}`,formParams,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    deleteArchitectTerm: (id)=> {
        return axios.delete(`/architects/${id}`);
    }
}

export default ArchitectsService;