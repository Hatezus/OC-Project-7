import React from 'react';
import styled from 'styled-components';

const TagStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	align-items: center;
	justify-content: center;

	width: fit-content;
	min-width: 115px;

	background: #ff6060;
	border-radius: 10px;

	@media screen and (max-width: 850px) {
		width: 84px;
		height: 20px;
	}
	& p {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;

		color: #ffffff;

		padding: 5px 20px;

		@media screen and (max-width: 850px) {
			font-size: 2px;
		}
	}
`;

function Tag({tagName}) {
	return (
		<TagStyled>
			<p>{tagName}</p>
		</TagStyled>
	);
}

export default Tag;
