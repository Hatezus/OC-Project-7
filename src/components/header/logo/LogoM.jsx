import React from 'react';
import styled from 'styled-components';
import logo from '../../../utils/images/header-logo.svg';

const LogoMStyled = styled.div`
	width: 145px;
	height: 47px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

function LogoM() {
	return (
		<LogoMStyled>
			<img src={logo} alt='Brand logo' />
		</LogoMStyled>
	);
}

export default LogoM;
