import React from 'react';
import styled from 'styled-components';

import img from './image.svg';

const TopSectionImgStyled = styled.div`
	background: #000000;
	mix-blend-mode: darken;
	opacity: 0.3;
	border-radius: 25px;
`;

function TopSectionImg({children}) {
	return (
		<TopSectionImgStyled>
			<img src={img} alt='' />
			{children}
		</TopSectionImgStyled>
	);
}

export default TopSectionImg;
