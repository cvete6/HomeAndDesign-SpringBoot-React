import React,{useState,useEffect} from 'react'
import {useParams, useHistory, Link} from 'react-router-dom';
import axios from '../../../custom-axios/axios';

const ProjectEdit = (props) => {

let valid=false;
const history = useHistory();
const [category,setCategory] =useState([]);
const [architect,setArchitect] =useState([]);

const [selectCategory,setSelectCategory] =useState();
const [selectArchitects,setSelectArchitects] =useState({});

var fieldsArrayCategory = [];
var fieldsArrayArchitects= [];

const [term,setTerm] = useState({});//vo term gi imam architecto so imeto i prezimeto i idito
const {id_project} = useParams();

console.log(id_project);

useEffect(() => {
        axios.get("/projects/id/"+id_project).then((data)=>{
            setTerm(data.data);
        })
    },[])


useEffect(() => {
    axios.get("/categories").then((response) =>{
        setCategory(response.data);
    })
    //treba da mi vrati lista
},[]);

useEffect(() => {
    axios.get("/architects").then((r) =>{
        setArchitect(r.data);
        //console.log(architect);
    })
},[]);

const handleOptionChangeCategory = (changeEvent) => {
    setSelectCategory(changeEvent.target.value);
}

const handleOptionChangeArchitect = (changeEvent) => {
    setSelectArchitects(  changeEvent.target.value)
    /*AMA NE MI E KOMPATIBILNO lIST<lONG>   so ova so go predavam tuka
    * setSelectArchitects( [
                ...selectArchitects, changeEvent.target.value
    ])*/
}



category.map((c,index) =>{
    fieldsArrayCategory.push(
        <div key={index} className="pr-4">
            <label htmlFor="id" className="col-sm-4 offset-sm-1 text-left  " >{c.projectType} </label>
            <div >
                <input type="radio" name={1}  value={c.id} className="form-control" id="id"  onChange={handleOptionChangeCategory}/>
            </div>
        </div>
    );
});

architect.map((a,index) =>{
    fieldsArrayArchitects.push(
        <div key={index} className="pr-4">
            <label htmlFor="id" className="col-sm-4 offset-sm-1 text-left  " >{a.name} </label>
            <div >
                <input type="radio" name={a.id}  value={a.id} className="form-control" id="id"  onChange={handleOptionChangeArchitect}/>
            </div>
        </div>
    );
});



const onFormSubmit = (e) => {//pva onForm Submit se izvrsuva ko ce se klikni na kopceto zacuvaj i da ja obrabotam taa forma
    //vnatre se kreira event koj se keira pri klik na kopceto
    e.preventDefault();//za da izbegneme CALLL BACK PAZI!!!server povici
    debugger;//za da vidime so ima vo ovaj event e
    console.log(e);
    console.log(selectArchitects);


    const newTerm = {
        "id": id_project,
        "name":e.target.name.value,
        "description": e.target.description.value,
        "from": e.target.from.value,
        "to": e.target.to.value,
        "id_category": selectCategory,
        "id_architect": selectArchitects
    };


    if(newTerm.description === "" || newTerm.name ==="" || newTerm.id_category === ""){
        valid=false;
        return valid;
    }
    else {
        valid=true;
        props.onsubmitt(newTerm);//ova onNEWTermADDED go ima vo appjs go ceka ko ce se
        //funkcijata ja prativ kako property
        history.push("/home")
    }
}

const handleTermOnChange  = (e) => {
        const paramName = id_project;
        const paramValue = e.target.value;
        setTerm({paramName:paramValue});
    }

return (//jsx template koja treba da ja vrajca ova forma
    <div className="row mt-5">
        <form className=" mt-5" onSubmit={onFormSubmit}>
            <h4 className="text-upper text-left">Add Project: </h4>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left font-weight-bold" >Project name</label>
                <div className="col-sm-6">
                    <input type="text" value={term.name} name={"name"} onChange={handleTermOnChange} className="form-control" id="name" placeholder="Project name" maxLength="50"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left font-weight-bold " >Description: </label>
                <div className="col-sm-6">
                    <input type="text"value={term.description} name={"description"} onChange={handleTermOnChange}  className="form-control" id="description" placeholder="description" maxLength="50"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="from" className="col-sm-4 offset-sm-1 text-left font-weight-bold" >Start project: </label>
                <div className="col-sm-6">
                    <input type="date" value={term.from} pattern={"YYYY-MM-dd"} name={"from"} onChange={handleTermOnChange} className="form-control" id="from" placeholder="start project" maxLength="50"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="to" className="col-sm-4 offset-sm-1 text-left  font-weight-bold " >End project: </label>
                <div className="col-sm-6">
                    <input type="date" value={term.to} pattern={"YYYY-MM-dd"} name={"to"} onChange={handleTermOnChange}  className="form-control" id="architect" placeholder="end project" maxLength="50"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="to" className="col-sm-4 offset-sm-1 text-left font-weight-bold " >Choice category of project: </label>
            </div>
            <div className=" row pl-xl-5">
                {fieldsArrayCategory}
            </div>

            <div className=" row">
                <label htmlFor="to" className="col-sm-4 offset-sm-1 text-left font-weight-bold" >Choice architect who work on project: </label>
            </div>
            <div className=" row pl-xl-5 ml-5">
                {fieldsArrayArchitects}
            </div>


            <div className="form-group row">
                <div
                    className="offset-sm-1 col-sm-3  text-center">
                    <button type="submit"className="btn btn-primary text-upper" disabled={valid}>
                        Save
                    </button>
                </div>
                <div
                    className="offset-sm-1 col-sm-3  text-center">
                    <button
                        className="btn btn-danger text-upper">
                        <Link to={"/projects"}>Cencel</Link>
                    </button>
                </div>
            </div>
        </form>
    </div>
)
}

export default ProjectEdit;
