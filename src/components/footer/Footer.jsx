import React from 'react';
import styled from 'styled-components';
import logo from '../../utils/images/footer-logo.svg';

const FooterStyled = styled.footer`
	width: 100%;
	height: 209px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	background-color: black;

	position: relative;

	.logo {
		position: absolute;
		top: 34%;
	}

	.text {
		position: absolute;

		top: 75%;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 24px;
		line-height: 142.6%;
		color: #ffff;
	}
`;

function Footer() {
	return (
		<FooterStyled>
			<div className='logo'>
				<img src={logo} alt='' />
			</div>
			<div className='text'>© 2020 Kasa. All rights reserved</div>
		</FooterStyled>
	);
}

export default Footer;
