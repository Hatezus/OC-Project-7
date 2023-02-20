/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
function NavBar() {
	return (
		<NavBarStyled>
			<NavLink className='NavLink' to='/'>
				Accueil
			</NavLink>
			<NavLink className='NavLink' to='/About'>
				A Propos
			</NavLink>
		</NavBarStyled>
	);
}

export default NavBar;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const NavBarStyled = styled.nav`
	width: 309px;
	height: 34px;

	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;

	margin-top: 17px;
	margin-bottom: 63px;

	@media screen and (max-width: 540px) {
		width: 200px;
		height: 24px;
	}

	@media screen and (max-width: 375px) {
		width: 140px;
		height: 17px;
	}

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

		@media screen and (max-width: 540px) {
			width: 100px;
			height: 21px;

			font-size: 20px;
		}
		@media screen and (max-width: 375px) {
			width: 59px;
			height: 17px;

			font-size: 12px;
		}
	}

	.NavLink.active {
		text-decoration: underline;
	}
`;
