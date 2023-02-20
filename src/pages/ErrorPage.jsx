/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Header from '../components/header/Header';
import Footer from '../components/Footer';

import {Link} from 'react-router-dom';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
function ErrorPage() {
	return (
		<ErrorPageStyled>
			<GlobalStyle />
			<Header />
			<section>
				<div className='message'>
					<div className='number'>
						<p> 404 </p>
					</div>
					<div className='text'>
						<p> Oups! La page que vous demandez n'existe pas. </p>
					</div>
					<Link className='redirect' to='/'>
						<p> Retourner sur la page d'acceuil </p>
					</Link>
				</div>
			</section>
			<Footer />
		</ErrorPageStyled>
	);
}

export default ErrorPage;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const GlobalStyle = createGlobalStyle`

*
{
    margin: 0;
    border: none;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    padding: 0;
}

body
{
    max-width: 1440px;
    min-height: 100vh;
	
	margin: auto;
    overflow-x: hidden;

	display: flex;
	flex-direction: column;

}
`;

const ErrorPageStyled = styled.main`
	& section {
		height: 100vh;
	}

	.message {
		display: flex;
		flex-wrap: wrap;

		flex-direction: column;

		justify-content: center;
		align-items: center;

		padding-left: 2%;
		padding-right: 2%;
	}

	.number {
		& p {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 700;
			font-size: 288px;
			line-height: 142.6%;

			color: #ff6060;

			margin-top: 100px;

			@media screen and (max-width: 1000px) {
				font-size: 200px;
			}
			@media screen and (max-width: 740px) {
				font-size: 160px;
			}
			@media screen and (max-width: 740px) {
				font-size: 100px;
			}
		}
	}
	.text {
		& p {
			display: flex;
			align-items: flex-end;
			text-align: center;

			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 36px;
			line-height: 142.6%;

			color: #ff6060;

			@media screen and (max-width: 1000px) {
				font-size: 27px;
			}
			@media screen and (max-width: 740px) {
				font-size: 20px;
			}
			@media screen and (max-width: 740px) {
				font-size: 15px;
			}
		}
	}

	.redirect {
		& p {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 142.6%;

			text-decoration-line: underline;

			color: #ff6060;

			margin-top: 170px;

			@media screen and (max-width: 1000px) {
				font-size: 14px;
			}
		}
	}
`;
