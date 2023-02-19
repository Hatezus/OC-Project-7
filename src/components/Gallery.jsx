import React from 'react';
import styled from 'styled-components';
import datas from '../utils/data';
import Card from './Card';

const GalleryStyled = styled.section`
	display: flex;
	flex-wrap: wrap;

	justify-content: center;

	gap: 50px;
	background-color: #f7f7f7;
	padding: 50px;
	border-radius: 25px;
	width: 96%;
	margin: 0 auto;
	margin-top: 40px;
`;

export default function Gallery() {
	return (
		<GalleryStyled>
			{datas.map((data) => {
				return (
					<Card
						key={data.id}
						id={data.id}
						title={data.title}
						cover={data.cover}
					/>
				);
			})}
		</GalleryStyled>
	);
}
