/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React from 'react';
import styled from 'styled-components';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
function Tag({tagName}) {
	return (
		<TagStyled>
			<p>{tagName}</p>
		</TagStyled>
	);
}

export default Tag;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const TagStyled = styled.div`
	min-width: 115px;
	width: fit-content;

	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	border-radius: 10px;
	background: #ff6060;

	@media screen and (max-width: 850px) {
		width: 84px;
		height: 20px;
	}

	& p {
		padding: 5px 20px;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;

		color: #ffffff;

		@media screen and (max-width: 850px) {
			font-size: 2px;
		}
	}
`;
