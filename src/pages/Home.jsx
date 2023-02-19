import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Footer from '../components/Footer';

import Gallery from '../components/Gallery';
import Header from '../components/header/Header';
import TopSection from '../components/TopSection';

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

const HomdStyled = styled.main`
	position: relative;
	max-width: 1440px;
	height: 1024px;

	background: #ffffff;
`;

function Home() {
	return (
		<HomdStyled>
			<GlobalStyle />
			<Header />
			<TopSection
				imgSrc={topImg}
				text='Chez vous, partout et ailleurs '
				isHomePage={true}
			/>
			<Gallery />
			<Footer />
		</HomdStyled>
	);
}

export default Home;
