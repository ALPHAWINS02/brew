import styled from 'styled-components';

export const Box = styled.div`
font-family:Work Sans;
margin-left:56px;
width:100%;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
@media (max-width:992px){
	margin-left:24px;
	
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
	max-width: 100%;
	margin: 0 auto;
@media (max-width:992px){
	display:flex;
	flex-direction:row;
}
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 10px;
@media (max-width:992px){
	display:grid;
}
`

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));


@media (max-width: 1000px) {
	display:flex;
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
@media (max-width:992px){
	display:grid;
	grid-template-columns:repeat(1,1fr);
}
`;

export const FooterLink = styled.a`
color:black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
@media (max-width:992px){
	font-size: 24px;
}
`;

export const Heading = styled.p`
font-size: 24px;
margin-bottom: 40px;
font-weight: bold;
`;