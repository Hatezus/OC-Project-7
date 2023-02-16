import React from 'react';
import styled from 'styled-components';
import logo from '../../utils/images/header-logo.svg';

const LogoStyled = styled.div`
	width: 210.32px;
	height: 68px;

	@media screen and (max-width: 375px) {
		width: 145px;
		height: 47px;
	}

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

function Logo() {
	return (
		<LogoStyled>
			<img src={logo} alt='Brand logo' />
		</LogoStyled>
	);
}

export default Logo;
