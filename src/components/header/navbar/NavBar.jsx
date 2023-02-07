import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

import AboutUsLink from './AboutUsLink';
import HomeLink from './HomeLink';

const NavBarStyled = styled.nav`
	position: absolute;
	left: 75.08%;
	right: 0%;
	top: 25%;
	bottom: 25%;

	background-color: blueviolet;

	display: flex;
	flex-wrap: wrap;

	.HomeLink {
		width: 136px;
		height: 34px;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 142.6%;
		/* or 34px */

		display: flex;
		align-items: flex-end;
		text-align: right;
		text-decoration-line: underline;

		color: #ff6060;
	}
	.AboutUsLink {
		width: 136px;
		height: 34px;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 142.6%;
		/* or 34px */

		display: flex;
		align-items: flex-end;
		text-align: right;

		color: #ff6060;
	}
`;

function NavBar() {
	return (
		<div className='Navbar'>
			<NavBarStyled>
				<Link className='HomeLink' to='/'>
					Accueil
				</Link>
				<Link className='AboutUsLink' to='/'>
					A Propos
				</Link>
			</NavBarStyled>
		</div>
	);
}

export default NavBar;
