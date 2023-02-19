import React from 'react';
import styled from 'styled-components';

const TopSectionStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 100%;
	height: 223px;

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
		border-radius: 25px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const TopSectionDarkenCalc = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 1;
	border-radius: 25px;
`;

const TopSectionText = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: 0;

	height: 100%;
	width: 100%;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 48px;
	line-height: 142.6%;

	border-radius: 25px;

	color: #ffff;

	z-index: 2;
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

function TopSection({imgSrc, text, isHomePage}) {
	return (
		<TopSectionStyled isHomePage={isHomePage}>
			<TopSectionImg>
				<img src={imgSrc} alt='Landscape' />
				<TopSectionDarkenCalc />
				<TopSectionText>{text}</TopSectionText>
			</TopSectionImg>
		</TopSectionStyled>
	);
}

export default TopSection;
