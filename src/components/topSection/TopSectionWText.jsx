import React from 'react';
import styled from 'styled-components';

import TopSectionImg from './TopSectionImg';
import TopSectionText from './TopSectionText';

const TopSectionStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	width: 100%;
	height: 223px;

	margin-top: 63px;

	border-radius: 25px;
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
