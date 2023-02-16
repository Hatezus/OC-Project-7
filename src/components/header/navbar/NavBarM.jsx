import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavBarMStyled = styled.nav`
	width: 140px;
	height: 17px;

	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;

	margin-top: 17px;
	margin-bottom: 40px;

	.NavLink {
		text-decoration: none;
		width: 59px;
		height: 17px;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 142.6%;

		color: #ff6060;

		.NavLink.active {
			text-decoration: underline;
		}
	}
`;

function NavBarM() {
	return (
		<NavBarMStyled>
			<NavLink className='NavLink' activeClassName='active' to='/Home'>
				Accueil
			</NavLink>
			<NavLink className='NavLink' activeClassName='active' to='/About us'>
				A Propos
			</NavLink>
		</NavBarMStyled>
	);
}

export default NavBarM;
