import React, { Component } from 'react';
import MapSimple from '../Map/Map';
import './aboutUs.css'
export class AboutUs extends Component {
    render() {
        return (
            <div className="container-sm w-75 pt-xl-5 mt-xl-5 pb-xl-5 mb-lg-auto pb-lg-5 ">
                <form>
                    <h1 className="font-weight-bold h-100 h5-responsive">Contact us:</h1>
                    <div className="form-row">
                        <div className="col-md-4 mb-3 text-left">
                            <label htmlFor="validationDefault01" >First name</label>
                            <input type="text" className="form-control" id="validationDefault01"
                                   placeholder="First name" value="" required/>
                        </div>
                        <div className="col-md-4 mb-3 text-left">
                            <label htmlFor="validationDefault02">Last name</label>
                            <input type="text" className="form-control" id="validationDefault02" placeholder="Last name"
                                   value="" required/>
                        </div>
                    </div>
                    <div className="form-row text-left">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault03">City</label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="City"
                                   required/>
                        </div>
                        <div className="col-md-3 mb-3 text-left">
                            <label htmlFor="validationDefault04">State</label>
                            <input type="text" className="form-control" id="validationDefault04" placeholder="State"
                                   required/>
                        </div>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleFormControlTextarea1 ">Message:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <div className="form-row text-left">
                        <div className="form-group pb-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>

                        <button className="btn btn-primary font-weight-bold" type="submit">Submit form</button>

                        <div className="row container-sm  text-xl-center justify-content-center ">
                            <MapSimple/>
                            <p>Visit us on this location.</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AboutUs;