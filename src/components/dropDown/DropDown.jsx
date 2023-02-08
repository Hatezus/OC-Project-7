import React, {useState} from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const DropdownHeader = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	max-width: 1023px;
	height: 47px;

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

const DropDownArrow = styled.div`
	padding-left: 92%;
`;
const DropdownBody = styled.div`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};

	flex-wrap: wrap;
	overflow: auto;

	max-width: 1023px;
	height: fit-content;

	background: #f7f7f7;
	border-radius: 5px;

	& p {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 142.6%;

		color: #ff6060;

		padding-top: 36px;
		padding-bottom: 19px;
		padding-left: 18px;
		padding-right: 27px;

		overflow-wrap: break-word;
	}
`;

const Dropdown = ({DropDownName, DropDownContent}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownContainer>
			<DropdownHeader onClick={() => setIsOpen(!isOpen)}>
				{DropDownName}
				<DropDownArrow> {isOpen ? '🔽' : '🔼'}</DropDownArrow>
			</DropdownHeader>
			<DropdownBody isOpen={isOpen}>
				<p>{DropDownContent}</p>
			</DropdownBody>
		</DropdownContainer>
	);
};

export default Dropdown;
