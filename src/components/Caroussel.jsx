import RightArrow from '../utils/images/right-caroussel-arrow.png';
import LeftArrow from '../utils/images/left-caroussel-arrow.png';
import {useState} from 'react';
import styled from 'styled-components';

const CarousselStyled = styled.section`
	position: relative;
	display: flex;
	width: 96%;
	height: 415px;
	border-radius: 25px;
	background-position: center;
	background-size: cover;

	margin: auto;

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
		transform: translateY(-50%);
		cursor: pointer;
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
		transform: translateX(-50%);
		color: $color-primary;
		font-weight: 500;
		font-size: clamp(14px, 2vw, 18px);
	}
`;

export default function Caroussel({imageSlider}) {
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
}
