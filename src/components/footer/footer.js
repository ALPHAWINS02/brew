import React from "react";
import footer from '../../assests/images/footer.png'

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footerstyle";

const Footer = () => {
return (
	<Box>
	    <h1 style={{marginLeft:10, textAlign:"justify"}}>
		Bringing your <span style= {{color: "#BD8A7D" }}>ideas</span>  to life,
     <br></br>
        one brew at a time <img style = {{weight:50,marginBottom:-4,height:50}}src={footer} alt="footer" /> </h1>
       
	<Container>
		<Row>
		<Column>
			<Heading>Call us</Heading>
			<FooterLink href="#">Europe</FooterLink>
			<FooterLink href="#" style={{fontWeight:"bold"}}>+457338503023</FooterLink>
			<FooterLink href="#">India</FooterLink>
      <FooterLink href="#" style={{fontWeight:"bold"}}>+917338503023</FooterLink>
    
		</Column>
		<Column>
			<Heading>Contact us</Heading>
			<FooterLink href="#">Email</FooterLink>
			<FooterLink href="#" style={{fontWeight:"bold"}}>brew@gmail.com</FooterLink>
		</Column>
		<Column>
			<Heading>Let's connect</Heading>
			<FooterLink href="#">Linkdin</FooterLink>
			<FooterLink href="#" style={{fontWeight:"bold"}} >brew@gmail.com</FooterLink>
		</Column>
    <Column>
			<Heading>Services </Heading>
			<FooterLink href="#">figma prototype</FooterLink>
			<FooterLink href="#">MVP</FooterLink>
			<FooterLink href="#">architecture and scaling</FooterLink>
			<FooterLink href="#">Expand your team</FooterLink>
			<FooterLink href="#">Build now pay later</FooterLink>
		</Column>
		<Column>
			<Heading>Company</Heading>
      <FooterLink href="#">About us</FooterLink>
			<FooterLink href="#">Our vision</FooterLink>
		</Column>
    <Column>
			<Heading>Pricing</Heading>
      <FooterLink href="#">Our Pricing</FooterLink>
		</Column>
	</Row>
	</Container>
	</Box>
);
};
export default Footer;
