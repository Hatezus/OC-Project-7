import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

import NavBar from './navbar/NavBar';

const HeaderStyled = styled.header`
	position: absolute;
	width: 1240px;
	height: 68px;
	left: 100px;
	top: 40px;
	background-color: aqua;
`;

function Header() {
	return (
		<HeaderStyled>
			<Logo />
			<NavBar />
		</HeaderStyled>
	);
}

export default Header;
