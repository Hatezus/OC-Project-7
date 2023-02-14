import React from 'react';
import styled from 'styled-components';
import logo from '../../../utils/images/header-logo.svg';

const LogoDStyled = styled.div`
	width: 210.32px;
	height: 68px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

function LogoD() {
	return (
		<LogoDStyled>
			<img src={logo} alt='Brand logo' />
		</LogoDStyled>
	);
}

export default LogoD;
