import React from 'react';
import styled from 'styled-components';
import datas from '../../utils/data';
import CardD from './cards/CardD';

const GalleryDStyled = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	background-color: #f7f7f7;
	padding: 50px;
	border-radius: 25px;
	width: 95%;
	margin: 0 auto;
	margin-top: 40px;
`;

export default function GalleryD() {
	return (
		<GalleryDStyled>
			{datas.map((data) => {
				return (
					<CardD
						key={data.id}
						id={data.id}
						title={data.title}
						cover={data.cover}
					/>
				);
			})}
		</GalleryDStyled>
	);
}
