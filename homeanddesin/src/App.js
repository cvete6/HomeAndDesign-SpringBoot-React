import './App.css';
import React, {Component} from 'react';

import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Architects from './Component/Architects/Architects/architects';
import ArchitectsService from './repository/axiosArchitectRepository';
import ProjectsService from "./repository/axiosProjectRepository";
import ArchitectDetail from './Component/Architects/ArchitectDetail/ArchitectDetail';
import '../src/Component/Architects/ArchitectCss/Button.css';
import  ArchitectEdit from './Component/Architects/ArchitectEdit/ArchitectEdit';
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home.js";
import ArchitectAdd from "./Component/Architects/ArchitectAdd/ArchitectAdd";
import ProjectEdit from "./Component/Projects/ProjectEdit/ProjectEdit";
import ProjectAdd from "./Component/Projects/ProjectAdd/ProjectAdd";
import ProjectDetail from "./Component/Projects/ProjectDetail/ProjectDetail";
import Projects from "./Component/Projects/Projects/projects";
import FooterPage from "./Component/Footer/Footer";
import MyCalendar from "./Calendar/Calendar";
import {AuthProvider} from "./Auth";
import LogIn from "../src/Authentication/LogIn";
import Register from "./Authentication/Register/Register";
import Menu from "./Authentication/Menu/Menu";
import AboutUs from "./Component/AboutUs/aboutUs";


class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            terms: [],

        }
    }


    componentDidMount() {
        this.loadArchitects();
    }

    loadArchitects =()=>{
       ArchitectsService.fetchArchitects().then((response) =>{
           //console.log(response)
           this.setState({
               terms: response.data
           })
       }).catch(error => {
           console.log(error)
       });
    }

    createArchitect = (newTerm) => {
        ArchitectsService.addArchitectTerm(newTerm).then((response)=>{
            const newTerm = response.data;
            console.log(newTerm);
            this.setState((prevState) => {//modifikacija na prethodnio state
                const newTermsRef = [...prevState.terms, newTerm];//dodavame element vo lista na terms toj so go dodadov a go dobivam od response
                //or
               // const terms = prevState.terms.concat(newTerm); //koncatenacija se kreira nova lista se dodava nov elem i na toj nacin state  se kreira nova referenca
                console.log(newTermsRef);
                return {
                    "terms": newTermsRef
                }
            });
        }).catch(error => {
            console.log(error)
        });
    }

    updateArchitect = ((editedTerm) => {//dobivam cel architect id ime prezime
        console.log(editedTerm);
        
        ArchitectsService.updateArchitectTerm(editedTerm).then((response)=>{
            console.log(response);
            const newTerm = response.data;
            console.log(newTerm);
            this.setState((prevState) => {
                console.log(prevState);
                const newTermsRef = prevState.terms.filter((item)=>{
                    debugger;
                    if (item.id===newTerm.id) {
                        return newTerm;
                    }
                    return item;
                })
                return {
                    "terms": newTermsRef
                }
            })
        });
    });

    deleteArchitect = (id) => {
        ArchitectsService.deleteArchitectTerm(id).then((response)=>{
            this.setState((state) => {
                const terms = state.terms.filter((t) => {
                    return t.id !== id;
                });
                return {terms}
            })
        })
    }




    loadProjects = () => {
        ProjectsService.fetchProjects().then((response) => {
            //console.log(response)
            this.setState({
                terms: response.data
            })
        }).catch(error => {
            console.log(error)
        });
    }

    createProject = (newTerm) => {
        ProjectsService.addProjectTerm(newTerm).then((response) => {
            debugger;
            const newTerm = response.data;
            console.log(response.data);

            this.setState((prevState) => {//modifikacija na prethodnio state
                const newTermsRef = [...prevState.terms, newTerm];//dodavame element vo lista na terms toj so go dodadov a go dobivam od response
                //or
                // const terms = prevState.terms.concat(newTerm); //koncatenacija se kreira nova lista se dodava nov elem i na toj nacin state  se kreira nova referenca
                console.log(newTermsRef);
                return {
                    "terms": newTermsRef
                }
            });
        }).catch(error => {
            console.log(error)
        });
    }

     updateProject = ((editedTerm) => {//dobivam cel Project id ime prezime
        console.log(editedTerm);

        ProjectsService.updateProjectTerm(editedTerm).then((response) => {
            console.log(response);
            const newTerm = response.data;
            console.log(newTerm);
            this.setState((prevState) => {
                console.log(prevState);
                const newTermsRef = prevState.terms.filter((item) => {
                    debugger;
                    if (item.id === newTerm.id) {
                        return newTerm;
                    }
                    return item;
                })
                return {
                    "terms": newTermsRef
                }
            })
        });
    });

    deleteProject = (id) => {
        ProjectsService.deleteProjectTerm(id).then((response) => {
            this.setState((state) => {
                const terms = state.terms.filter((t) => {
                    return t.id !== id;
                });
                return {terms}
            })
        })
    }




    render() {

        const routing = (
            <AuthProvider>

            <Router>
                <Menu/>

                <main role="main" id="mainheight" className="pt-xl-5"  >
                    <Route path={"/home"} className="mt-5 pt-xl-5">
                        <Home/>
                    </Route>

                    <Route  path={"/login"} >
                        <LogIn/>
                    </Route>
                    <Route  path="/register">
                        <Register/>
                    </Route>

                    <div className="container pt-3"  id="main" >
                        <Route path={"/architects"}  exact render={()=>
                            <Architects onPageClick={this.loadArchitects} terms={this.state.terms} onDelete={this.deleteArchitect} />}>
                        </Route>
                        <Route path="/architects/id_architect/:id_architect"  render={()=>
                            <ArchitectDetail />}>
                        </Route>
                        <Route path={"/architects/new"} render={()=><ArchitectAdd onNewTermAdded={this.createArchitect}/>}>
                        </Route>
                        <Route path="/architects/edit/:id_architect"  render={()=>
                            <ArchitectEdit onsubmitt={this.updateArchitect} />}>
                        </Route>


                        <Route path={"/projects"}  exact render={()=>
                            <Projects onPageClick={this.loadProjects} terms={this.state.terms} onDelete={this.deleteProject} />}>
                        </Route>
                        <Route path="/projects/id_project/:id_project"  render={()=>
                            <ProjectDetail />}>
                        </Route>
                        <Route path={"/projects/new"} render={()=><ProjectAdd onNewTermAdded={this.createProject}/>}>
                        </Route>
                        <Route path="/projects/edit/:id_project"  render={()=>
                            <ProjectEdit onsubmitt={this.updateProject} />}>
                        </Route>

                        <Route path="/projects/calendar">
                            <MyCalendar/>
                        </Route>
                        <Route path={"/aboutUs"} >
                            <AboutUs/>
                        </Route>
                        <Redirect to={"/home"}/>
                    </div>

                </main>
                <FooterPage/>
            </Router>
            </AuthProvider>
        )

        return (
            <div className="App">
                {routing}
            </div>
        );
    }
}

export default App;
//    List
//                 {
//                     this.state.terms.map( term => <div key={term.id}>{term.name}</div>)
//                 }