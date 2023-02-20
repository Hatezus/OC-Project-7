/*--------------------------------------------------[ Improts ]--------------------------------------------------*/
import React from 'react';
import styled from 'styled-components';

import datas from '../utils/data';
import Card from './Card';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const Gallery = () => {
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
};
export default Gallery;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const GalleryStyled = styled.section`
	width: 96%;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	gap: 50px;
	padding: 50px;
	border-radius: 25px;
	margin: 0 auto;
	margin-top: 40px;

	background-color: #f7f7f7;
`;
