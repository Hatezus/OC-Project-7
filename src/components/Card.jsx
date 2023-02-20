/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const Card = ({id, title, cover}) => {
	return (
		<CardStyled>
			<Link to={`/lodging/${id}`} className='gallery_card'>
				<img src={cover} alt={title} />
				<h3>{title}</h3>
			</Link>
		</CardStyled>
	);
};

export default Card;
/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const CardStyled = styled.div`
	width: 30%;
	height: 340px;

	position: relative;
	border-radius: 10px;
	overflow: hidden;

	cursor: pointer;

	transition: box-shadow 0.2s ease-in-out;

	@media screen and (max-width: 1230px) {
		width: 45%;
	}
	@media screen and (max-width: 900px) {
		width: 100%;
	}
	@media screen and (max-width: 500px) {
		height: 200px;
	}

	.gallery_card {
		width: 100%;
		height: 100%;

		text-decoration: none;
		color: beige;
	}

	&::after {
		content: '';

		width: 100%;
		height: 100%;

		z-index: 10;
		position: absolute;
		top: 0;
		left: 0;

		pointer-events: none;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(0, 0, 0, 0.5) 100%
		);
	}

	&:hover {
		box-shadow: 0 2px 8px rgb(0, 0, 0);
	}

	&:hover img {
		transform: scale(1.1);
	}

	img {
		width: 100%;
		height: 100%;

		object-fit: cover;
		object-position: center;

		transition: transform 0.2s ease-in-out;
		will-change: transform;
	}

	h3 {
		position: absolute;
		bottom: 20px;
		left: 20px;
		right: 20px;

		z-index: 20;
		font-weight: 500;
		font-size: clamp(12px, 3vw, 18px);
		color: #ffff;
	}
`;
