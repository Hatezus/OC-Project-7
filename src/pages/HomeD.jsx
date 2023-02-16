import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import GalleryD from '../components/gallery/GalleryD';

import HeaderD from '../components/header/HeaderD';
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

const HomdDStyled = styled.main`
	position: relative;
	max-width: 1440px;
	height: 1024px;

	background: #ffffff;
`;

function HomeD() {
	return (
		<HomdDStyled>
			<GlobalStyle />
			<HeaderD />
			<TopSection
				imgSrc={topImg}
				height={223}
				text='Chez vous, partout et ailleurs '
			/>
			<GalleryD />
		</HomdDStyled>
	);
}

export default HomeD;
