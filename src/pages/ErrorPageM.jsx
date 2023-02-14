import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import FooterM from '../components/footer/FooterM';
import HeaderM from '../components/header/HeaderM';

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
			font-size: 96px;
			line-height: 142.6%;
			/* or 137px */

			display: flex;
			align-items: center;
			text-align: center;

			color: #ff6060;

			margin-top: 100px;
		}
	}
	.text {
		& p {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 142.6%;

			display: flex;
			align-items: flex-end;
			text-align: center;

			color: #ff6060;

			display: flex;
			align-items: flex-end;
		}
	}

	.redirect {
		& p {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 142.6%;
			/* identical to box height, or 20px */

			display: flex;
			align-items: flex-end;
			text-decoration-line: underline;

			color: #ff6060;

			margin-top: 180px;
		}
	}
`;

function ErrorPageM() {
	return (
		<ErrorPageDStyled>
			<GlobalStyle />
			<HeaderM />
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
			<FooterM />
		</ErrorPageDStyled>
	);
}

export default ErrorPageM;
