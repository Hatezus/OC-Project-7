import React from 'react';
import styled from 'styled-components';
import logo from '../../utils/images/footer-logo.svg';

const FooterMStyled = styled.footer`
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
		top: 30%;
	}

	.text {
		position: absolute;

		top: 65%;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 142.6%;
		color: #ffff;
	}
`;

function FooterM() {
	return (
		<FooterMStyled>
			<div className='logo'>
				<img src={logo} alt='' />
			</div>
			<div className='text'>© 2020 Kasa. All rights reserved</div>
		</FooterMStyled>
	);
}

export default FooterM;
