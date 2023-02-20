/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import styled from 'styled-components';

import logo from '../../utils/images/header-logo.svg';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const Logo = () => {
	return (
		<LogoStyled>
			<img src={logo} alt='Brand logo' />
		</LogoStyled>
	);
};

export default Logo;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const LogoStyled = styled.div`
	width: 210.32px;
	height: 68px;

	@media screen and (max-width: 465px) {
		width: 160px;
		height: 47px;
	}

	@media screen and (max-width: 425px) {
		width: 145px;
		height: 47px;
	}

	& img {
		width: 100%;
		height: 100%;

		object-fit: cover;
	}
`;
