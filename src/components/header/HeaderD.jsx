import React from 'react';
import styled from 'styled-components';

import LogoD from './logo/LogoD';
import NavBarD from './navbar/NavBarD';

const HeaderDStyled = styled.header`
	display: flex;
	flex-wrap: wrap;

	justify-content: space-between;

	width: 100%;
	height: 68px;

	margin-top: 40px;
	padding-left: 2%;
	padding-right: 2%;
`;

function HeaderD() {
	return (
		<HeaderDStyled>
			<LogoD />
			<NavBarD />
		</HeaderDStyled>
	);
}

export default HeaderD;
