import React, {useState} from 'react';
import styled from 'styled-components';

import arrow from '../../utils/images/dropDown-arrow.png';

const SmallDropdownContainer = styled.div`
	width: 100%;

	margin-top: 33px;
`;

const DropdownHeader = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

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
	position: relative;
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
	display: ${(props) => (props.isOpen ? 'block' : 'none')};

	flex-wrap: wrap;
	overflow: auto;

	max-width: 1023px;
	min-height: 233px;
	height: fit-content;

	background: #f7f7f7;
	border-radius: 5px;

	& p {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 142.6%;

		display: flex;
		align-items: center;

		color: #ff6060;

		padding-top: 36px;
		padding-bottom: 19px;
		padding-left: 18px;
		padding-right: 27px;

		overflow-wrap: break-word;
	}
`;

const SmallDropdown = ({DropDownName, DropDownContent}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SmallDropdownContainer>
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
		</SmallDropdownContainer>
	);
};

export default SmallDropdown;
