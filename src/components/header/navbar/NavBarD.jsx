import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavBarDStyled = styled.nav`
	width: 309px;
	height: 34px;

	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;

	margin-top: 17px;
	margin-bottom: 63px;

	.NavLink {
		width: 136px;
		height: 34px;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 142.6%;
		color: #ff6060;
		text-decoration: none;
	}

	.NavLink.active {
		text-decoration: underline;
	}
`;

function NavBarD() {
	return (
		<NavBarDStyled>
			<NavLink className='NavLink' activeClassName='active' to='/Home'>
				Accueil
			</NavLink>
			<NavLink className='NavLink' activeClassName='active' to='/About us'>
				A Propos
			</NavLink>
		</NavBarDStyled>
	);
}

export default NavBarD;
