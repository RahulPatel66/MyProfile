import React from "react";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
const About = () => {
    return (
        <>
            <Nav/>
            <div  style={{ "width": "100%", "background": "darkslategray","marginTop":"3rem"}}>
                <div className="container text-white pt-2 pb-3" >
                    <h1 className="text-warning pt-4 pb-3" style={{ "fontFamily": "Carter One,cursive", "borderBottom": "2px solid white" }}>About Me</h1>
                    <h3 className="pt-1 pb-1">I<span className="text-info">'</span>m Rahul Patel and I am <span className="text-warning">Web Developer</span></h3>
                    <p>Hello! My name is Rahul Patel. I am a Web Developer, and I'm very passionate and dedicated to my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the deseign process, from discussion and collabration.</p>

                    <div className="row ">
                        <div className="col-md-6" >
                            <ul class="list-group " >
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>BirthDay : <span style={{ "color": "darkgray" }}>17/08/2001</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>Website : <span style={{ "color": "darkgray" }}>https://rahulpatel66.github.io/Rahul-PersonalWebsite</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>Degree : <span style={{ "color": "darkgray" }}>BTech</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>Branch : <span style={{ "color": "darkgray" }}>CSE</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "fontWeight": "bolder" }}><a className="btn btn-success" href="./images/Rahul Patel resume.pdf" download>Download Resume</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6" >
                            <ul class="list-group " >
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>Age : <span style={{ "color": "darkgray" }}>21</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>Email : <span style={{ "color": "darkgray" }}>r.j.patel81034@gmail.com</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>Mobile : <span style={{ "color": "darkgray" }}>8103418521</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "borderBottom": "2px dotted grey", "fontWeight": "bolder" }}>City : <span style={{ "color": "darkgray" }}>Indore, MP</span></li>
                                <li class="list-group-item text-light pt-1 pb-3 mt-4 mb-2" style={{ "background": "none", "border": "none", "fontWeight": "bolder" }}><a className="btn btn-success">Hire Me</a></li>

                            </ul>
                        </div>

                    </div>

                    <div className="row mt-5">

                        <div className="col-md-6">
                            <h2 className="text-warning" style={{ "borderBottom": "1px solid white", "paddingBottom": "1rem" }}>Education</h2>

                            <div className="m-1 mt-5 bg-dark" style={{ "border": "2px solid white", "padding": "1rem", "borderRadius": "10px" }}>
                                <p><i className='fas fa-calendar-alt text-info'> </i>   2019-2023</p>
                                <h3 className="text-warning">Bachelor Degree</h3>
                                <p>I have Completed my Bachelors of Engineering in Eletronics & Telecommunication branch from Mahakal Institute of Technology & Management (MITM) College,Ujjan.</p>
                            </div>
                            <div className="m-1 mt-5 bg-dark" style={{ "border": "2px solid white", "padding": "1rem", "borderRadius": "10px" }}>
                                <p><i className='fas fa-calendar-alt text-info'> </i>   2019-2023</p>
                                <h3 className="text-warning">Higher-Secondary</h3>
                                <p>I have Completed my Higher-Seondary in First division from CPS,Ujjan.</p>
                            </div>
                            <div className="m-1 mt-5 bg-dark" style={{ "border": "2px solid white", "padding": "1rem", "borderRadius": "10px" }}>
                                <p><i className='fas fa-calendar-alt  text-info'> </i>   2019-2023</p>
                                <h3 className="text-warning">Higher-Schooling</h3>
                                <p>I have Completed my Higher-Schooling in First division from CJCS,Ujjan.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-5 text-warning" style={{ "borderBottom": "1px solid white", "paddingBottom": "1rem" }}>Skills</h2>


                            <div className="card bg-dark p-1" style={{ "border": "2px solid white" }}>
                                <h3 className="card-title mt-3 mb-3 m-auto text-warning">Frontend Devlopement</h3>
                                <div className="card-body">
                                    <div className="row mt-4 ">
                                        <div className="col-md-6 text-center">
                                            <i className='fab fa-html5 text-info m-1 ' style={{ "fontSize": "2rem" }}></i><br />
                                            <h4 className="text-light">HTML</h4>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <i className='fab fa-css3-alt text-info m-1' style={{ "fontSize": "2rem" }}></i><br />
                                            <h4 className="text-light">CSS</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-4 ">
                                        <div className="col-md-6 text-center">
                                            <i className='fab fa-js-square text-info m-1 ' style={{ "fontSize": "2rem" }}></i><br />
                                            <h4 className="text-light">Java Script</h4>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <i className='fas fa-bold text-info m-1' style={{ "fontSize": "2rem" }}></i><br />
                                            <h4 className="text-light">Bootstrap</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-4 mb-3">
                                        <div className="col-md-6 text-center">
                                            <i className='fas fa-jedi text-info m-1 ' style={{ "fontSize": "2rem" }}></i><br />
                                            <h4 className="text-light">JQuery</h4>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <i className='fab fa-react text-info m-1' style={{ "fontSize": "2rem" }}></i><br />
                                            <h4 className="text-light">ReactJs</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card bg-dark p-1 mt-1" style={{ "border": "2px solid white" }}>
                                <h3 className="card-title mt-3 mb-3 m-auto text-warning">Backend Devlopement</h3>
                                <div className="card-body">
                                    <div className="row mt-4 ">
                                        <div className="col-md-12 text-center">
                                            <i className='fab fa-java text-info m-1 ' style={{ "fontSize": "2rem" }}></i><br />
                                            <h4 className="text-light">Java (Core & Advance)</h4>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default About;