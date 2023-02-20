/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import {useState} from 'react';
import styled from 'styled-components';

import RightArrow from '../utils/images/right-caroussel-arrow.png';
import LeftArrow from '../utils/images/left-caroussel-arrow.png';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const Caroussel = ({imageSlider}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex(currentIndex + 1);
		if (currentIndex === imageSlider.length - 1) setCurrentIndex(0);
	};

	const prevSlide = () => {
		setCurrentIndex(currentIndex - 1);
		if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1);
	};

	return (
		<CarousselStyled
			style={{backgroundImage: `url(${imageSlider[currentIndex]})`}}
		>
			{imageSlider.length > 1 && (
				<>
					<img
						className='arrow arrow_right'
						src={RightArrow}
						alt='show next slider'
						onClick={nextSlide}
					/>
					<img
						className='arrow arrow_left'
						src={LeftArrow}
						alt='show previous slider'
						onClick={prevSlide}
					/>
					<p className='slideCount'>
						{currentIndex + 1} / {imageSlider.length}
					</p>
				</>
			)}
		</CarousselStyled>
	);
};

export default Caroussel;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/
const CarousselStyled = styled.section`
	width: 96%;
	height: 415px;

	position: relative;
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	border-radius: 25px;

	background-position: center;
	background-size: cover;

	@media screen and (max-width: 700px) {
		height: 330px;
	}
	@media screen and (max-width: 500px) {
		height: 255px;
	}

	.arrow {
		position: absolute;
		top: 50%;
		height: 15%;

		cursor: pointer;

		transform: translateY(-50%);

		&:active {
			transform: translateY(-50%) scale(0.9);
		}
		&_right {
			right: 25px;
		}
		&_left {
			left: 25px;
		}
	}
	.slideCount {
		position: absolute;
		bottom: 25px;
		left: 50%;

		color: #ffff;
		font-weight: 500;
		font-size: clamp(14px, 2vw, 18px);

		transform: translateX(-50%);
	}
`;
