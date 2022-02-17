import React from "react";
import {
	Button,
	Container,
	HeroBg,
	HeroBtnWrapper,
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	Image,
	ImageContainer,
} from "./ThankyouStyles";
import { Link } from "react-router-dom";
import { useParams } from 'react-router'

function Thankyou() {
	let id = useParams("productId").id;

	return (
		<HeroContainer>
			<HeroBg>
				{/* <VideoBg autoPlay={true} loop={true} muted={true} src={Video} type="video/mp4" /> */}
			</HeroBg>
			<HeroContent>
				<HeroH1>Thank you for Shopping with us!!</HeroH1>
				<HeroP>Please check your email for order Confirmation.</HeroP>
				<div>{"Your Product id : " + id}</div>
				<div>{"Your MetaMask id : " + localStorage.getItem('eth_id')}</div>
				<HeroBtnWrapper>
					<Link to="/" className="btn-dark text-center" style={{ padding: "5%", width: "120%" }}>
						Continue Shopping{" "}
						<i className="fas fa-arrow-alt-circle-right"></i>
					</Link>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
}

{
	/* <Container>
			<ImageContainer>
				<Image src="https://images.pexels.com/photos/7563647/pexels-photo-7563647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
			</ImageContainer>
			<HeroContent>
				<HeroH1>Ideation and Creation Entrepreneurs</HeroH1>
				<HeroP>Where your Ideas take Wings!!</HeroP>
				<HeroBtnWrapper>
					<Button
						to="/joinus"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="false"
						dark="true"
					>
						Join Us {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</Container> */
}

export default Thankyou;
