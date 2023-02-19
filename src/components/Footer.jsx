import React from 'react';
import styled from 'styled-components';
import logo from '../utils/images/footer-logo.svg';

const FooterStyled = styled.footer`
	width: 96%;
	max-width: 1440px;
	height: 209px;
	margin-top: 164px;
	margin-left: 2%;
	margin-right: 2%;

	bottom: 0;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	align-items: center;
	justify-content: center;

	background-color: black;

	.logo {
		position: absolute;
		top: 34%;
	}

	.text {
		position: absolute;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		line-height: 142.6%;
		color: #ffff;

		top: 75%;
		font-size: 24px;

		@media screen and (max-width: 490px) {
			font-size: 12px;
			top: 65%;
		}
	}
`;

function Footer() {
	return (
		<FooterStyled>
			<div className='logo'>
				<img src={logo} alt='Brand logo' />
			</div>
			<div className='text'>© 2020 Kasa. All rights reserved</div>
		</FooterStyled>
	);
}

export default Footer;
