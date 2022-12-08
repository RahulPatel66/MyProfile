import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import '../home.css';


const Home = () => {
    return (
        <>
            <div className="container " style={{"marginTop":"9rem","height":"auto"}}>
                <div className="row text-white" style={{"justifyContent":"space-between"}}>
                    <div className="col-md-5" style={{"height":"40rem","margin":"1rem"}}>
                        <p>Hellow!</p>
                        <h1 style={{"fontSize":"4rem","fontWeight":"bolder"}}>I <span className="text-success">'</span>m Rahul Patel</h1>
                        <p className="text-warning" style={{"fontSize":"2rem"}}>Frontend Developer & Designer</p>
                        <p className="text-info" style={{"fontSize":"1.3rem"}}>I am passionate about creating web experiences that improve the lives of those around me. I am focus on creating clean, responsive and user-friendly experiences.</p>
                        <button className="btn btn-success">Hire Me</button>
                    </div>
                    <div className="col-md-4 text-center" >
                            <img src="./images/rahul.png" id="image" alt="logo" style={{"width":"100%","border":"2px solid white","borderTopLeftRadius":"50%","borderBottomRightRadius":"50%"}}/>
                    </div>
                  
                    {/* <div className="col-md-4 text-center " style={{"lineHeight":"5rem"}}>
                    <a href="www.linkedin.com/in/rahul-patel-b30141203" title="Linkedin Profile" target="__blanke"><i class='fab fa-linkedin text-white' style={{fontSize:"2rem"}}></i></a><br />
                    <a href="https://github.com/RahulPatel66" title="Github Profile" target="__blanke"><i class='fab fa-github-square text-white' style={{fontSize:"2rem"}}></i></a> <br />
                   <a href="https://auth.geeksforgeeks.org/user/patel940740" title="GeekForGeeks Profile" target="__blanke"><img src="./images/geeklogo.jpeg" alt="" style={{"width":"2rem","height":"2rem","borderRadius":"50%"}}/></a>
                   
                    </div> */}
                    
                </div>
            </div>
        </>
    );
};

export default Home;