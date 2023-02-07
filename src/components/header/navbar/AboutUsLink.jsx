import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const HomeLinkStyled = styled.li`
	position: absolute;
	left: 90.65%;
	right: 0%;
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

	color: #ff6060;
`;

function AboutUsLink() {
	return (
		<HomeLinkStyled>
			<Link to='/'>A Propos </Link>
		</HomeLinkStyled>
	);
}

export default AboutUsLink;
