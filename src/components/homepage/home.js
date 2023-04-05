import React from "react";
import './home.css';
import coffee from '../../assests/images/coffee1.png';
import brew from '../../assests/images/video.webm';
import beverage from '../../assests/images/emoji_food_beverage.png';

const Page=()=>{
    return(
        <>
            <div className="upper-div-main">
                <div className="yash "></div>
                <div className="textdiv">
                    <h1>Crafting <font color="#BD8A7D">products</font>, <br/><div className='one'>one sip at a time
                    <img className="textdiv1" src={coffee}  ></img></div></h1>
                    <p>We fuse tech, design, strategy for success of startups</p>
                    <button className="button"><span><font color='white'>Coffee?</font><img className="button-image" src={beverage} height={"20px"} width={"20px"}></img></span></button>
                </div>
                <video className="image" src={brew} autoPlay loop muted/>
            </div><br></br>
        </>
    );
}
export default Page;      