import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const LogoStyled = styled.div`
	position: absolute;
	left: 0%;
	right: 83.04%;
	top: 0%;
	bottom: 0%;
`;

function Logo() {
	return (
		<LogoStyled>
			<img src={logo} alt='' />
		</LogoStyled>
	);
}

export default Logo;
