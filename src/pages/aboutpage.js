import React from "react";
import Navbar from "../components/Navbar/Navbar";
import './aboutpage.css';
import Cards from "../components/cardview/cardView";
import alarm from '../assests/images/alarm_onalarm.png';
import Footer from "../components/footer/footer";
import draw from '../assests/images/draw.png';


const About=()=>{
    return(
        <>
            <Navbar/>
            <div className="heading-main">
                <div className="heading">
                    <h1>Where <font color="#BD8A7D">creativity</font> is<br></br>always brewing <img src={draw} height='30px' width='30px'/></h1>
                </div>
                <p>We are a team of 10 chosen from different parts of India having a great passion to work <br/>hard, make dreams a reality</p>
            </div>
            <div className="about-grid">
                <div className="about-grid-element">
                    <b><i>Master Brewer</i></b>
                    <img src={process.env.PUBLIC_URL + 'Master.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Ram</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                    <b><font color='#BD8A7D'>Github Link</font></b>
                </div>
                <div className="about-grid-element">
                    <b><i>Craftsman</i></b>
                    <img src={process.env.PUBLIC_URL + 'craft.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                    <b><font color='#BD8A7D'>Github Link</font></b>
                </div>
                <div className="about-grid-element">
                    <b><i>Brew Manager </i></b>
                    <img src={process.env.PUBLIC_URL + 'bremanger.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Ram</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                    <b><font color='#BD8A7D'>Github Link</font></b>
                </div>
                <div className="about-grid-element">
                    <b><i>Craftsman</i></b>
                    <img src={process.env.PUBLIC_URL + 'Master.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                    <b><font color='#BD8A7D'>Github Link</font></b>
                </div>
                <div className="about-grid-element">
                    <b><i>Master Brewer</i></b>
                    <img src={process.env.PUBLIC_URL + 'Master.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Ram</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                    <b><font color='#BD8A7D'>Github Link</font></b>
                </div>
                <div className="about-grid-element">
                    <b><i>Craftsman</i></b>
                    <img src={process.env.PUBLIC_URL + 'Master.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                    <b><font color='#BD8A7D'>Github Link</font></b>
                </div>
            </div>
            <div className="heading-main">
                <div className="heading">
                    <h1>Our <font color="#BD8A7D">culture</font></h1>
                </div>
                <p>How we interact, ideate, execute, and <br/>things that we are obsessed about</p>
            </div>
            <Cards/>
            <div class="img-box2">
                <p>"We had a great time working with the team, at Brew Labs.
                <br></br>They are passionate, hard-working people.<br></br>
                They solved all the bugs on time and made our life less complicated."</p> 
            </div>
            <Cards/>
            <div class="img-box3">
                <p>Trust the process with Brew labs & <br></br>
                savour the results - worth every moment <img class="alarm1" src={alarm}></img> </p>
            </div>
            <Footer/>
        </>
    );
}
export default About;