import React from 'react';
import styled from 'styled-components';

import LogoM from './logo/LogoM';
import NavBarM from './navbar/NavBarM';

const HeaderMStyled = styled.header`
	display: flex;
	flex-wrap: wrap;

	justify-content: space-between;

	width: 100%;
	height: 68px;

	margin-top: 40px;
`;

function HeaderM() {
	return (
		<HeaderMStyled>
			<LogoM />
			<NavBarM />
		</HeaderMStyled>
	);
}

export default HeaderM;
