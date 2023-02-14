import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavBarDStyled = styled.nav`
	width: 309px;
	height: 34px;

	display: flex;
	flex-wrap: wrap;

	justify-content: flex-end;

	margin-top: 17px;

	.HomeLink {
		width: 136px;
		height: 34px;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 142.6%;

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

		color: #ff6060;
	}
`;

function NavBarD() {
	return (
		<NavBarDStyled>
			<Link className='HomeLink' to='/'>
				Accueil
			</Link>
			<Link className='AboutUsLink' to='/'>
				A Propos
			</Link>
		</NavBarDStyled>
	);
}

export default NavBarD;
