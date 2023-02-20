/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavBar from './NavBar';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const Header = () => {
	return (
		<HeaderStyled>
			<Logo />
			<NavBar />
		</HeaderStyled>
	);
};

export default Header;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const HeaderStyled = styled.header`
	width: 100%;
	height: 68px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	margin-top: 40px;
	margin-bottom: 30px;
	padding-left: 2%;
	padding-right: 2%;

	@media screen and (max-width: 465px) {
		margin-bottom: 10px;
	}
`;
