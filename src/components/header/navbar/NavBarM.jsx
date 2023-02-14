import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavBarMStyled = styled.nav`
	width: 140px;
	height: 17px;

	display: flex;
	flex-wrap: wrap;

	justify-content: flex-end;

	margin-top: 17px;
	margin-bottom: 40px;

	.HomeLink {
		width: 59px;
		height: 17px;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 142.6%;

		text-decoration-line: underline;

		color: #ff6060;
	}
	.AboutUsLink {
		width: 71px;
		height: 17px;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 142.6%;

		color: #ff6060;
	}
`;

function NavBarM() {
	return (
		<NavBarMStyled>
			<Link className='HomeLink' to='/Home'>
				Accueil
			</Link>
			<Link className='AboutUsLink' to='/About us'>
				A Propos
			</Link>
		</NavBarMStyled>
	);
}

export default NavBarM;
