/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import React, {useState} from 'react';
import styled from 'styled-components';

import arrow from '../../utils/images/dropDown-arrow.png';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const Dropdown = ({DropDownName, DropDownContent}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownContainer>
			<DropdownHeader onClick={() => setIsOpen(!isOpen)}>
				{DropDownName}
				<DropDownArrow>
					<img
						className={isOpen ? 'arrow_up' : 'arrow_down'}
						src={arrow}
						alt='A small arrow'
					/>
				</DropDownArrow>
			</DropdownHeader>
			<DropdownBody isOpen={isOpen}>
				<p>{DropDownContent}</p>
			</DropdownBody>
		</DropdownContainer>
	);
};

export default Dropdown;

/*--------------------------------------------------[ Style ]--------------------------------------------------*/
const DropdownContainer = styled.div`
	width: 100%;
	max-width: 1023px;

	margin-top: 33px;
`;

const DropdownHeader = styled.div`
	max-width: 1023px;
	height: 47px;

	display: flex;
	align-items: center;
	padding-left: 18px;
	position: relative;
	border-radius: 5px;

	cursor: pointer;

	background: #ff6060;
	color: #ffffff;

	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 142.6%;
`;

const DropDownArrow = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	right: 5%;

	& .arrow_up {
		rotate: 180deg;
	}
`;

const DropdownBody = styled.div`
	max-width: 1023px;
	height: fit-content;

	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	flex-wrap: wrap;
	overflow: auto;

	background: #f7f7f7;
	border-radius: 5px;

	& p {
		display: flex;
		align-items: center;

		padding-top: 36px;
		padding-bottom: 19px;
		padding-left: 18px;
		padding-right: 27px;

		color: #ff6060;
		overflow-wrap: break-word;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 142.6%;
	}
`;
