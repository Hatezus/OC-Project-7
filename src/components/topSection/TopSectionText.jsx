import React from 'react';
import styled from 'styled-components';

const TopSectionTextStyled = styled.div`
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

function TopSectionText() {
	return (
		<TopSectionTextStyled>
			Chez vous, partout et ailleurs
		</TopSectionTextStyled>
	);
}

export default TopSectionText;
