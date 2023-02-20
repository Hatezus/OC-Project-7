/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import styled from 'styled-components';

import logo from '../utils/images/footer-logo.svg';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
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

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const FooterStyled = styled.footer`
	width: 96%;
	max-width: 1440px;
	height: 209px;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	position: relative;
	bottom: 0;

	margin-top: 164px;
	margin-left: 2%;
	margin-right: 2%;

	background-color: black;

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

		@media screen and (max-width: 490px) {
			font-size: 12px;
			top: 65%;
		}
	}
`;
