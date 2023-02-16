import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import GalleryM from '../components/gallery/GalleryM';

import HeaderM from '../components/header/HeaderM';
import TopSection from '../components/topSection/TopSection';

import topImg from '../utils/images/img-homePage.png';

const GlobalStyle = createGlobalStyle`
*
{
    margin: 0;
    border: none;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    padding: 0;
}

a
{
    text-decoration: none;
}

body
{
    max-width: 1440px;
    margin: auto;
    overflow-x: hidden;
}
`;

const HomdMStyled = styled.main`
	position: relative;
	max-width: 1440px;
	height: 1024px;

	background: #ffffff;
`;

function HomeM() {
	return (
		<HomdMStyled>
			<GlobalStyle />
			<HeaderM />
			<TopSection
				imgSrc={topImg}
				height={111}
				text='Chez vous, partout et ailleurs '
			/>
			<GalleryM />
		</HomdMStyled>
	);
}

export default HomeM;
