import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

import NavBar from './navbar/NavBar';

const HeaderStyled = styled.header`
	display: flex;
	flex-wrap: wrap;

	justify-content: space-between;

	width: 100%;
	height: 68px;

	margin-top: 40px;
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
