import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import HeaderD from '../components/header/HeaderD';
import FooterD from '../components/footer/FooterD';
import {Link} from 'react-router-dom';

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

a
{
    text-decoration: none;
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

const ErrorPageDStyled = styled.main`
	& section {
		height: 100vh;
	}

	.message {
		display: flex;
		flex-wrap: wrap;

		flex-direction: column;

		justify-content: center;
		align-items: center;
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
		}
	}
	.text {
		& p {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 36px;
			line-height: 142.6%;

			display: flex;
			align-items: flex-end;

			color: #ff6060;
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
		}
	}
`;

function ErrorPageD() {
	return (
		<ErrorPageDStyled>
			<GlobalStyle />
			<HeaderD />
			<section>
				<div className='message'>
					<div className='number'>
						<p> 404 </p>
					</div>
					<div className='text'>
						<p> Oups! La page que vous demandez n'existe pas. </p>
					</div>
					<Link className='redirect' to='/Home'>
						<p> Retourner sur la page d'acceuil </p>
					</Link>
				</div>
			</section>
			<FooterD />
		</ErrorPageDStyled>
	);
}

export default ErrorPageD;
