import React from 'react';
import styled from 'styled-components';

import TopSectionImg from './TopSectionImg';
import TopSectionText from './TopSectionText';

const TopSectionStyled = styled.div`
	position: absolute;
	width: 1240px;
	height: 223px;
	left: 100px;
	top: 171px;
	background-color: azure;
`;

function TopSection() {
	return (
		<TopSectionStyled>
			<TopSectionImg>
				<TopSectionText />
			</TopSectionImg>
		</TopSectionStyled>
	);
}

export default TopSection;
