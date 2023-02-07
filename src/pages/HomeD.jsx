import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Header from '../components/header/Header';
import TopSection from '../components/top-section/TopSection';

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

const HomdDStyled = styled.section`
	position: relative;
	width: 1440px;
	height: 1024px;

	background: #ffffff;
`;

function HomeD() {
	return (
		<HomdDStyled>
			<GlobalStyle />
			<Header />
			<TopSection />
		</HomdDStyled>
	);
}

export default HomeD;
