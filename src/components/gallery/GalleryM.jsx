import React from 'react';
import styled from 'styled-components';
import datas from '../../utils/data';
import CardM from './cards/CardM';

const GalleryMStyled = styled.section`
	display: flex;
	flex-wrap: wrap;
	background-color: #f7f7f7;
	padding: 50px;
	border-radius: 25px;
	width: 100%;
	margin: 0 auto;
	margin-top: 25px;
`;

export default function GalleryM() {
	return (
		<GalleryMStyled>
			{datas.map((data) => {
				return (
					<CardM
						key={data.id}
						id={data.id}
						title={data.title}
						cover={data.cover}
					/>
				);
			})}
		</GalleryMStyled>
	);
}
