import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
const ContectMe = () => {
    return (
        <>
        <Nav/>
            <div style={{ "width": "100%","marginTop":"3rem" }}>
                <div className="container text-white pt-2 pb-3" >
                    <h1 className="text-warning pt-4 pb-3" style={{ "fontFamily": "Carter One,cursive", "borderBottom": "2px solid white" }}>Contact Me</h1>

                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="card bg-success text-center">
                            <i class='fab fa-linkedin text-white' style={{fontSize:"2rem","marginTop":"1rem"}}></i>
                                <div className="card-body">
                                <h3 className="card-title text-warning">Linkedin</h3>
                                    <p className="card-text">Rahul Patel</p>
                                    <a href="https://www.linkedin.com/in/rahul-patel-b30141203" target="__blank" className="text-info">Send a Message</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card bg-success text-center">
                            <i class='fab fa-whatsapp text-white' style={{fontSize:"2rem","marginTop":"1rem"}}></i>
                                <div className="card-body">
                                <h3 className="card-title text-warning">Call And Whatsapp</h3>
                                    <p className="card-text">+91 8103418521</p>
                                    <a href="https://api.whatsapp.com/send?phone=918103418521" target="__blank" className="text-info">Send a Message</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card bg-success text-center">
                                
                            <i class='fab  text-white' style={{fontSize:"2rem","marginTop":"1rem"}}><img src="./images/email.png " style={{width:"2.5rem"}}/></i>
                                <div className="card-body">
                                <h3 className="card-title text-warning">Email</h3>
                                    <p className="card-text">r.j.patel81034@gmail.com</p>
                                    <a href="mailto:r.j.patel81034@gmail.com" target="__blank" className="text-info">Send a Mail</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ContectMe;