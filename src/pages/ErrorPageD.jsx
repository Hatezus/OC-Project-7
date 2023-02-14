import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from '../components/header/HeaderD';

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

const ErrorPageDStyled = styled.body`
	.message {
		display: flex;
		flex-wrap: wrap;

		flex-direction: column;
	}

	.number {
		& p {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 700;
			font-size: 288px;
			line-height: 142.6%;

			color: #ff6060;
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

	.advice {
		& p {
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 142.6%;

			text-decoration-line: underline;

			color: #ff6060;
		}
	}
`;

function ErrorPageD() {
	return (
		<ErrorPageDStyled>
			<GlobalStyle />
			<Header />
			<div className='message'>
				<div className='number'>
					<p> 404 </p>
				</div>
				<div className='text'>
					<p> Oups! La page que vous demandez n'existe pas. </p>
				</div>
				<div className='advice'>
					<p> PRetourner sur la page d'acceuil </p>
				</div>
			</div>
		</ErrorPageDStyled>
	);
}

export default ErrorPageD;
