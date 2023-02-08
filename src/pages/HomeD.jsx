import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import DropDown from '../components/dropDown/DropDown';
import SmallDropdown from '../components/dropDown/SmallDropDown';

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
	max-width: 1440px;
	height: 1024px;

	background: #ffffff;
`;

function HomeD() {
	return (
		<HomdDStyled>
			<GlobalStyle />
			<Header />
			<TopSection />
			<DropDown
				DropDownName='Test'
				DropDownContent='iuhdsfisdf dfigfuhbs gjhdiofhgji dfopsodàoijdfgio^jdfçi goidfjg oiudjf goijdfgoij dfoijhg oidfjgoijdf  ogpih dfiuhzeioyug ueyrgo ierjguipheio ugipuerhg iuerh iouy bergiouiou ehsguisergiuhfgigjuodijhgfodifgh'
			/>
			<SmallDropdown
				SmallDropDownName='Equipements'
				SmallDropDownContent='kjsdfusduif usdiofhjsiodh f_shd fo ihsd foihs dqoiudpfhiusdhf iuqsdhfiufàçjsdgôi h sdfoigfh suidhf iusdgf '
			/>
		</HomdDStyled>
	);
}

export default HomeD;
