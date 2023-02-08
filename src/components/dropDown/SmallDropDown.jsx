import React, {useState} from 'react';
import styled from 'styled-components';

const SmallDropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const SmallDropdownHeader = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	max-width: 582px;
	height: 52px;

	background: #ff6060;
	border-radius: 5px;
	color: white;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 142.6%;

	color: #ffffff;

	padding-left: 18px;
`;

const SmallDropDownArrow = styled.div`
	padding-left: 75%;
`;
const SmallDropdownBody = styled.div`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};

	flex-wrap: wrap;
	overflow: auto;

	max-width: 582px;
	height: fit-content;

	background: #f7f7f7;
	border-radius: 5px;

	& p {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 142.6%;
		/* or 26px */

		color: #ff6060;

		padding-top: 40px;
		padding-bottom: 19px;
		padding-left: 20px;
		padding-right: 12px;

		overflow-wrap: break-word;
	}
`;

const SmallDropdown = ({SmallDropDownName, SmallDropDownContent}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SmallDropdownContainer>
			<SmallDropdownHeader onClick={() => setIsOpen(!isOpen)}>
				{SmallDropDownName}
				<SmallDropDownArrow> {isOpen ? '🔽' : '🔼'}</SmallDropDownArrow>
			</SmallDropdownHeader>
			<SmallDropdownBody isOpen={isOpen}>
				<p>{SmallDropDownContent}</p>
			</SmallDropdownBody>
		</SmallDropdownContainer>
	);
};

export default SmallDropdown;
