import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./Nav";
const Project = () => {
    return (
        <>
            <Nav/>
            <div style={{ "width": "100%","marginTop":"3rem" }}>
                <div className="container text-white pt-2 pb-3" >
                    <h1 className="text-warning pt-4 pb-3" style={{ "fontFamily": "Carter One,cursive", "borderBottom": "2px solid white" }}>My Projects</h1>

                    <div className="row text-center" style={{ "justifyContent": "space-between" }}>
                        <div className="col-md-3 mt-4" >
                            <div className="card" style={{ "width": "24rem" }}>
                             
                                <div id="carouselExampleControls" className="carousel slide card-img-top" data-bs-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./images/resturant-1.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/resturant-2.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/resturant-3.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/resturant-4.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/resturant-5.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/resturant-6.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div className="card-body  bg-success text-center">
                                    <h5 className="card-title text-warning" >My Resturant (static website)</h5>
                                    <p className="card-text">It is a resturant Website.</p>
                                    <a href="https://github.com/RahulPatel66" target="__blank" className="btn btn-dark">GitHub</a> <a href="https://rahulpatel66.github.io/MyRestorant/" className="btn btn-dark" target="__blank">Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4" >
                            <div className="card" style={{ "width": "24rem" }}>
                             
                                <div id="coffeeControls" className="carousel slide card-img-top" data-bs-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./images/coffee-1.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/coff-2.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/coffee-3.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/coffee-4.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/coffee-5.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/coffee-6.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/coffee.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#coffeeControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#coffeeControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div className="card-body  bg-success text-center">
                                    <h5 className="card-title text-warning" >My Coffee Shop (static website)</h5>
                                    <p className="card-text">It is a Coffee Shop Website.</p>
                                    <a href="https://github.com/RahulPatel66" className="btn btn-dark" target="__blank">GitHub</a> <a href="https://rahulpatel66.github.io/MyCoffeeShop.github.io/" className="btn btn-dark" target="__blank">Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 " >
                            <div className="card" style={{ "width": "24rem" }}>
                             
                                <div id="HealthyControls" className="carousel slide card-img-top" data-bs-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./images/HealthyFoodFit-1.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/HealthyFoodFit-2.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/HealthyFoodFit-3.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/HealthyFoodFit-4.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/HealthyFoodFit-5.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/HealthyFoodFit-6.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/HealthyFoodFit-7.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#HealthyControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#HealthyControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div className="card-body  bg-success text-center">
                                    <h5 className="card-title text-warning" >HealthyFoodFit (static website)</h5>
                                    <p className="card-text">It is a Online Food Ordering & Delivery Website.</p>
                                    <a href="https://github.com/RahulPatel66" target="__blank" className="btn btn-dark">GitHub</a> <a href="https://rahulpatel66.github.io/HealthyFoodFit/" className="btn btn-dark" target="__blank">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>

              <div className="row text-center" style={{ "justifyContent": "space-between" }}>
                        <div className="col-md-3 mt-4">
                            <div className="card" style={{ "width": "24rem" }}>
                             
                                <div id="mycarControls" className="carousel slide card-img-top" data-bs-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./images/mycar-1.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/mycar-2.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/mycar-3.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/mycar-4.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/mycar-5.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/mycar-6.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#mycarControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#mycarControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div className="card-body  bg-success text-center">
                                    <h5 className="card-title text-warning" >MyCar.com (static website)</h5>
                                    <p className="card-text">It is a Car Selling Website.</p>
                                    <a href="https://github.com/RahulPatel66" target="__blank" className="btn btn-dark">GitHub</a> <a href="https://rahulpatel66.github.io/MyCar.com/" className="btn btn-dark" target="__blank">Live Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="card" style={{ "width": "24rem" }}>
                             
                                <div id="collegeControls" className="carousel slide card-img-top" data-bs-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./images/college-1.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-2.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-3.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-4.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-5.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-6.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-7.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-8.jpg" className="d-block w-100" alt="image"/>
                                        </div> 
                                        <div className="carousel-item">
                                        <img src="./images/college-9.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-10.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-11.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/college-12.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#collegeControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#collegeControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div className="card-body  bg-success text-center">
                                    <h5 className="card-title text-warning" >College Management System (java)</h5>
                                    <p className="card-text">It is a College management system Website.</p>
                                    <a href="https://github.com/RahulPatel66/CollegeManagement" className="btn btn-dark" target="__blank">GitHub</a> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4 " >
                            <div className="card" style={{ "width": "24rem"}}>
                             
                                <div id="myshopControler" className="carousel slide card-img-top" data-bs-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./images/myshop-1.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/myshop-2.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img src="./images/myshop-3.jpg" className="d-block w-100" alt="image"/>
                                        </div>
                                        
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#myshopControler" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#myshopControler" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div className="card-body  bg-success text-center">
                                    <h5 className="card-title text-warning" >My Shop (java)</h5>
                                    <p className="card-text">It is a online product selling E-commerce website .</p>
                                    <a href="https://github.com/RahulPatel66/MyShop" target="__blank" className="btn btn-dark">GitHub</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;