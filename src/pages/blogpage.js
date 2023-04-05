import React from "react";
import './aboutpage.css'
import Navbar from "../components/Navbar/Navbar";
import alarm from '../assests/images/alarm_onalarm.png';
import sync from '../assests/images/sync_saved_locally.png';
import Cards from "../components/cardview/cardView";
import Footer from "../components/footer/footer";

const Blog=()=>{
    return(
        <>
            <Navbar/>
            <div className="heading-main">
                <div className="heading">
                    <h1>Where <font color="#BD8A7D">creativity</font> is<br></br>always brewing </h1>
                </div>
                <p>We are a team of 10 chosen from different parts of India having a great passion to work <br/>hard, make dreams a reality</p>
            </div>
            <div className="about-grid">
                <div className="about-grid-element">
                    <b><i>Blog</i></b>
                    <img src={process.env.PUBLIC_URL + 'Rectangle.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                </div>
                <div className="about-grid-element">
                    <b><i>Blog</i></b>
                    <img src={process.env.PUBLIC_URL + 'Rectangle.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                </div>
                <div className="about-grid-element">
                    <b><i>Blog</i></b>
                    <img src={process.env.PUBLIC_URL + 'Rectangle.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                </div>
                <div className="about-grid-element">
                    <b><i>Blog</i></b>
                    <img src={process.env.PUBLIC_URL + 'Rectangle.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                </div>
                <div className="about-grid-element">
                    <b><i>Blog</i></b>
                    <img src={process.env.PUBLIC_URL + 'Rectangle.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                </div>
                <div className="about-grid-element">
                    <b><i>Blog</i></b>
                    <img src={process.env.PUBLIC_URL + 'Rectangle.png'} alt="edit"></img>
                    <br></br>
                    <b>Mr.Shyam</b>
                    <p>Enjoys working with algorithms, data structures and software design patterns.</p>
                    <br></br>
                </div>
            </div>
            <div class="img-box2">
                <p>"We had a great time working with the team, at Brew Labs.
                <br></br>They are passionate, hard-working people.<br></br>
                They solved all the bugs on time and made our life less complicated."</p> 
            </div>
            <div className="heading-main">
                <div className="heading">
                    <h1>Our <font color="#BD8A7D">skills</font> set for blending <img src={sync} width="40px" height="30px"></img></h1>
                </div>
                <p>Your work requires a specific set of skills, and we possess them all.</p>
            </div>
            <Cards/>
            <div class="img-box3">
                <p>Trust the process with Brew labs & <br></br>
                savour the results - worth every moment<img class="alarm" src={alarm}></img></p>
            </div>
            <Footer/>
        </>
    );
}
export default Blog;