import React from 'react';
import styled from 'styled-components';

const TagStyled = styled.div`
	display: flex;
	flex-wrap: wrap;

	align-items: center;
	justify-content: center;

	width: 115px;
	height: 25px;

	background: #ff6060;
	border-radius: 10px;
	& p {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 142.6%;

		color: #ffffff;
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
