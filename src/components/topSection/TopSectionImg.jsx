import React from 'react';
import styled from 'styled-components';

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

function TopSectionImg({children, imgSrc}) {
	return (
		<TopSectionImgStyled>
			<img src={imgSrc} alt='' />
			{children}
		</TopSectionImgStyled>
	);
}

export default TopSectionImg;
