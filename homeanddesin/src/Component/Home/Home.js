import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import './Home.css'
const Home = () => {
    return (
        <div>
        <MDBContainer className=" pt-5" >
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="image4.png"
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="image2.jpg"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Strong mask</h3>
                            <p>Second text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="image1.jpg"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slight Mast</h3>
                            <p>Third text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>

            <div className="row pt-xl-5 pb-lg-5 justify-content-center">
                <div className="col-xs-push-12 text-xl-center pt-xl-5 pb-lg-4 w-50">
                    <h1>Home and Design </h1>
                    <h5></h5>
                    <p>
                        There’s no defined road map when starting your own business in any industry, but add in the variables that come with a creative profession like an interior design business and there's perhaps even more to learn: From hiring the right people (or knowing when to let go of the wrong ones) to honing brand identity, the path to growing a successful business can often be one riddled with trial by error. Yet, as Stevie McFadden, founder of Flourish Spaces in Richmond, Virginia, explains, "There’s no sense in reinventing the wheel"—plus, a lot can be learned by example. We asked a selection of seasoned design pros for their best tips on everything from billing to client strategy when taking the leap of faith and going out on your own.
                    </p>
                </div>
            </div>
            <div className="row pt-xl-5 pb-lg-5 justify-content-center responsive" id="sertificate">

                <div className="col-xs-push-12 text-xl-center pt-xl-5 pb-lg-4 w-50 responsive">
                    <h1>Sertificate </h1>
                    <h5></h5>
                    <div className="row pt-xl-5 justify-content-center responsive">
                    <div className="col-2 text-xl-center pr-lg-3">
                        <h5 className="responsive">business premises</h5>
                        <i className="fa fa-home h-100 fa-4x responsive " aria-hidden="true"></i>
                    </div>
                    <div className="col-2 text-xl-center pr-lg-3">
                        <h5 className="responsive">residential buildings</h5>
                        <i  id="icona" className="fa fa-building h-100 fa-4x responsive" aria-hidden="true"></i>
                    </div>
                    <div className="col-2 text-xl-center pr-lg-3 responsive">
                        <h5 className="responsive">interior
                            design</h5>
                        <i className="fa  fa-user-o h-100 fa-4x responsive" aria-hidden="true"></i>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
