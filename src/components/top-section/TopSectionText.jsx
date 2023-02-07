import React from 'react';
import styled from 'styled-components';

const TopSectionTextStyled = styled.div`
	width: 705px;
	height: 68px;

	position: absolute;
	left: 25.9%;
	right: 25.14%;
	top: 24.32%;
	bottom: 69.04%;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 48px;
	line-height: 142.6%;
	/* or 68px */

	display: flex;
	align-items: flex-end;

	color: black;
	background-color: aqua;
`;

function TopSectionText() {
	return (
		<TopSectionTextStyled>
			Chez vous, partout et ailleurs
		</TopSectionTextStyled>
	);
}

export default TopSectionText;
