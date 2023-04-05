import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Cards from "../components/cardview/cardView";
import monitoring from '../assests/images/monitoring.png'
import Footer from "../components/footer/footer";
import './homepage.css';
import alarm from '../assests/images/alarm_onalarm.png';
import sync from '../assests/images/sync_saved_locally.png'
import Form from "../components/contactform/contactform";
import pricelogo from '../assests/images/volunteer_activism.png';

function Pricing(){
    return(
        <>
            <Navbar/>
            <div className="heading-main">
                <div className="heading">
                    <h1>Products brewed to <font color="#BD8A7D">perfection</font>, <br/>at a price you'll love <img src={pricelogo} width="40px" height="30px"></img></h1>
                </div>
                <p>We will reach out to you within 24 hours.<br/>Please provide us with your interests, we are eager to join you</p>
            </div>
            <Form/>
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
                savour the results - worth every moment <img class="alarm" src={alarm}></img></p>
            </div>
            <Footer/>
        </>
    );
}
export default Pricing;