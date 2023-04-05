import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Cards from "../components/cardview/cardView";
import Page from "../components/homepage/home";
import monitoring from '../assests/images/monitoring.png'
import Footer from "../components/footer/footer";
import './homepage.css';
import alarm from '../assests/images/alarm_onalarm.png';
import sync from '../assests/images/sync_saved_locally.png'

function Home(){
    return(
        <>
            <Navbar/>
            <Page/>
            <div className="heading-main">
                <div className="heading">
                    <h1>Here is how we can <br/>brew up <font color="#BD8A7D">success</font> together <img src={monitoring}></img></h1>
                </div>
                <p>Just like a master brewer combines the right ingredients in the right proportions, <br></br>we combine technology, design, and user experience to create a product that is both functional & appealing</p>
            </div>
            <div className="prime-grid">
            
            <div className="prime-grid-element">
                
                <img src={process.env.PUBLIC_URL + 'figma.png'} alt="edit"></img>
                <p>We will understand what your users need and turn that input into a design making a model of the product in Figma that looks real. User research Prototyping A-B testing Final prototype</p>
                <div className="list">
                    <ul>
                        <li>User research</li>
                        <li>Prototyping</li>
                        <li>A-B testing</li>
                        <li>Final prototype</li>
                    </ul>
                </div>
            </div>
            <div className="prime-grid-element">
                <img src={process.env.PUBLIC_URL + 'figma.png'} alt="edit"></img>
                <p>We will understand what your users need and turn that input into a design making a model of the product in Figma that looks real. User research Prototyping A-B testing Final prototype</p>
                <div className="list">
                    <ul>
                        <li>User research</li>
                        <li>Prototyping</li>
                        <li>A-B testing</li>
                        <li>Final prototype</li>
                    </ul>
                </div>
            </div>
            <div className="prime-grid-element">
                <img src={process.env.PUBLIC_URL + 'figma.png'} alt="edit"></img>
                <p>We will understand what your users need and turn that input into a design making a model of the product in Figma that looks real. User research Prototyping A-B testing Final prototype</p>
                <div className="list">
                    <ul>
                        <li>User research</li>
                        <li>Prototyping</li>
                        <li>A-B testing</li>
                        <li>Final prototype</li>
                    </ul>
                </div>
            </div>
            <div className="prime-grid-element">
                <img src={process.env.PUBLIC_URL + 'figma.png'} alt="edit"></img>
                <p>We will understand what your users need and turn that input into a design making a model of the product in Figma that looks real. User research Prototyping A-B testing Final prototype</p>
                <div className="list">
                    <ul>
                        <li>User research</li>
                        <li>Prototyping</li>
                        <li>A-B testing</li>
                        <li>Final prototype</li>
                    </ul>
                </div>
            </div>
            <div className="prime-grid-element">
                <img src={process.env.PUBLIC_URL + 'figma.png'} alt="edit"></img>
                <p>We will understand what your users need and turn that input into a design making a model of the product in Figma that looks real. User research Prototyping A-B testing Final prototype</p>
                <div className="list">
                    <ul>
                        <li>User research</li>
                        <li>Prototyping</li>
                        <li>A-B testing</li>
                        <li>Final prototype</li>
                    </ul>
                </div>
            </div>
            <div className="prime-grid-element">
                <img src={process.env.PUBLIC_URL + 'figma.png'} alt="edit"></img>
                <p>We will understand what your users need and turn that input into a design making a model of the product in Figma that looks real. User research Prototyping A-B testing Final prototype</p>
                <div className="list">
                    <ul>
                        <li>User research</li>
                        <li>Prototyping</li>
                        <li>A-B testing</li>
                        <li>Final prototype</li>
                    </ul>
                </div>
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
export default Home;