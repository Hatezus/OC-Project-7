import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const LogoStyled = styled.div``;

function Logo() {
	return (
		<LogoStyled>
			<img src={logo} alt='' />
		</LogoStyled>
	);
}

export default Logo;
