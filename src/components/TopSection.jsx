import React from 'react';
import styled from 'styled-components';

const TopSectionStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 100%;
	height: ${(props) => props.height}px;

	padding-left: 2%;
	padding-right: 2%;
	border-radius: 25px;
`;
const TopSectionImg = styled.div`
	width: 100%;
	height: 100%;

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

const TopSectionText = styled.div`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 48px;
	line-height: 142.6%;

	border-radius: 25px;

	position: absolute;
	padding-top: 78px;
	padding-left: 27%;

	color: #ffff;
`;

function TopSection({imgSrc, text, height}) {
	return (
		<TopSectionStyled height={height}>
			<TopSectionImg>
				<img src={imgSrc} alt='Landscape' />
				<TopSectionText>{text}</TopSectionText>
			</TopSectionImg>
		</TopSectionStyled>
	);
}

export default TopSection;
