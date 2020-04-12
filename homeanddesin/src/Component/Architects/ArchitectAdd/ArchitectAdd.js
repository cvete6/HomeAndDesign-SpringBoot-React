import React from 'react'
import {Link, Redirect,useHistory} from 'react-router-dom';

const ArchitectAdd = (props) => {
    let valid=false;
    const history = useHistory();

    const onFormSubmit = (e) => {//pva onForm Submit se izvrsuva ko ce se klikni na kopceto zacuvaj i da ja obrabotam taa forma
        //vnatre se kreira event koj se keira pri klik na kopceto
        e.preventDefault();//za da izbegneme CALLL BACK PAZI!!!server povici
        debugger;//za da vidime so ima vo ovaj event e
        console.log(e);

        const newTerm = {
            "name":e.target.name.value,
            "lastName": e.target.lastName.value,
        };
        if(newTerm.lastName === "" || newTerm.name ===""){
            valid=false;
            return valid;
        }
        else {
            valid=true;
            props.onNewTermAdded(newTerm);//ova onNEWTermADDED go ima vo appjs go ceka ko ce se
            //funkcijata ja prativ kako property
            history.push("/architects")
        }

    }



    return (//jsx template koja treba da ja vrajca ova forma
        <div className="row mt-5">
            <form className=" mt-5" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left">Add Architect</h4>
                <div className="form-group row">
                    <label htmlFor="architect" className="col-sm-4 offset-sm-1 text-left " >Architect name</label>
                    <div className="col-sm-6">
                        <input type="text" name={"name"}  className="form-control" id="architect" placeholder="Architect name" maxLength="50"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 offset-sm-1 text-left" >Architect lastname</label>
                    <div className="col-sm-6">
                        <input type="text" name={"lastName"} className="form-control" id="lastName" placeholder="Architect last name" maxLength="50"/>
                    </div>
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
                            <Link to={"/architects"}>Cencel</Link>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ArchitectAdd;