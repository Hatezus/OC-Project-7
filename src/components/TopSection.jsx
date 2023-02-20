/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import styled from 'styled-components';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const TopSection = ({imgSrc, text, isHomePage}) => {
	return (
		<TopSectionStyled isHomePage={isHomePage}>
			<TopSectionImg>
				<img src={imgSrc} alt='Landscape' />
				<TopSectionDarkenCalc />
				<TopSectionText>{text}</TopSectionText>
			</TopSectionImg>
		</TopSectionStyled>
	);
};

export default TopSection;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const TopSectionStyled = styled.div`
	width: 100%;
	height: 223px;

	display: flex;
	flex-wrap: wrap;

	padding-left: 2%;
	padding-right: 2%;
	border-radius: 25px;

	${({isHomePage}) =>
		isHomePage &&
		`
		@media screen and (max-width: 860px) {
			height: 193px;
		}
		@media screen and (max-width: 660px) {
			height: 163px;
		}
		@media screen and (max-width: 500px) {
			height: 133px;
		}
	`}
`;
const TopSectionImg = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
	display: flex;
	flex-wrap: wrap;

	border-radius: 25px;

	& img {
		width: 100%;
		height: 100%;

		border-radius: 25px;
		object-fit: cover;
	}
`;

const TopSectionDarkenCalc = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-wrap: wrap;
	position: absolute;
	top: 0;
	left: 0;

	z-index: 1;
	border-radius: 25px;

	background-color: rgba(0, 0, 0, 0.3);
`;

const TopSectionText = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 48px;
	line-height: 142.6%;

	z-index: 2;
	border-radius: 25px;

	color: #ffff;

	@media screen and (max-width: 860px) {
		font-size: 38px;
	}
	@media screen and (max-width: 660px) {
		font-size: 28px;
	}
	@media screen and (max-width: 500px) {
		font-size: 24px;
		padding-left: 10%;
	}
`;
