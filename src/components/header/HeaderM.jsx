import React from 'react';
import styled from 'styled-components';

import LogoM from './logo/LogoM';
import NavBarM from './navbar/NavBarM';

const HeaderMStyled = styled.header`
	display: flex;
	flex-wrap: wrap;

	justify-content: space-between;

	width: 100%;

	margin-bottom: 20px;
	margin-top: 40px;
	padding-left: 2%;
	padding-right: 2%;
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
