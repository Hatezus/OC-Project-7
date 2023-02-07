import React from 'react';
import styled from 'styled-components';

import img from './image.jpg';

const TopSectionImgStyled = styled.div`
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

function TopSectionImg({children}) {
	return (
		<TopSectionImgStyled>
			<img src={img} alt='' />
			{children}
		</TopSectionImgStyled>
	);
}

export default TopSectionImg;
