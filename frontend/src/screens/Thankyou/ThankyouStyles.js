import styled from "styled-components";

export const Container = styled.div``;

export const ImageContainer = styled.div``;

export const Image = styled.img`
	width: 100%;
	height: 760px;
`;

export const heading = styled.h1``;
export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeroH1 = styled.h1`
	color: #000;
	font-size: 48px;
	text-align: center;
	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin-top: 24px;
	color: #000;
	font-size: 24px;
	text-align: center;
	max-width: center;
	max-width: 600px;
	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeroContainer = styled.div`
	background-image: url('');
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;
	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(180deg, #abbaab 0%, #ffffff 100%),
			linear-gradient(180deg, #abbaab 0%, transparent 100%);
		z-index: 2;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const Button = styled.button`
	border-radius: 40px;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	background: linear-gradient(180deg, #abbaab 0%, #ffffff 100%);
	height: 60px;
	width: 200px;
	font-weight: 700;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: linear-gradient(180deg, #485563 0%, #29323c 100%);
		color: white;
	}
`;
