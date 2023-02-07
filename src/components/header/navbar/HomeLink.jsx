import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const HomeLinkStyled = styled.li`
	width: 136px;
	height: 34px;

	position: absolute;
	left: 75.08%;
	right: 13.95%;
	top: 25%;
	bottom: 25%;

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
`;

function HomeLink() {
	return (
		<HomeLinkStyled>
			<Link to='/'>Accueil </Link>
		</HomeLinkStyled>
	);
}

export default HomeLink;
