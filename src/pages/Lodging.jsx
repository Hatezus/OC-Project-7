/*--------------------------------------------------[ Imports ]--------------------------------------------------*/
import styled, {createGlobalStyle} from 'styled-components';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import datas from '../utils/data';

import Header from '../components/header/Header';
import Footer from '../components/Footer';
import Caroussel from '../components/Caroussel';
import SmallDropdown from '../components/dropDown/SmallDropDown';
import Tag from '../components/Tag';

import greyStar from '../utils/images/grey-star.png';
import redStar from '../utils/images/red-star.png';

/*--------------------------------------------------[ Component ]--------------------------------------------------*/
const Lodging = () => {
	const [imageSlider, setImageSlider] = useState([]);

	const idAccomodation = useParams('id').id;
	const dataCurrentAccomodation = datas.filter(
		(data) => data.id === idAccomodation
	);

	useEffect(() => {
		const dataCurrentAccomodation = datas.filter(
			(data) => data.id === idAccomodation
		);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);

	const name = dataCurrentAccomodation[0].host.name.split(' ');
	const rating = dataCurrentAccomodation[0].rating;
	const description = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;
	const formattedEquipments = equipments.join('\n');

	return (
		<LodgingStyled>
			<GlobalStyle />
			<Header />
			<Caroussel imageSlider={imageSlider} />
			<section className='lodging'>
				<div className='lodging_content'>
					<div className='lodging_content_infos'>
						<h1>{dataCurrentAccomodation[0].title}</h1>
						<p>{dataCurrentAccomodation[0].location}</p>
						<div>
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return <Tag key={index} tagName={tag} />;
							})}
						</div>
					</div>
					<div className='lodging_content_host'>
						<div>
							<div className='lodging_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img
								src={dataCurrentAccomodation[0].host.picture}
								alt='host of this accomodation'
							/>
						</div>

						<div className='lodging_content_host_stars'>
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img
										key={index}
										src={ratingValue <= rating ? redStar : greyStar}
										alt='star'
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className='lodging_dropdown'>
					<div className='lodging_dropdown_item'>
						<SmallDropdown
							DropDownName={'Description'}
							DropDownContent={description}
						/>
					</div>
					<div className='lodging_dropdown_item'>
						<SmallDropdown
							DropDownName={'Équipements'}
							DropDownContent={formattedEquipments}
						/>
					</div>
				</div>
			</section>
			<Footer />
		</LodgingStyled>
	);
};

export default Lodging;

/*--------------------------------------------------[ Styles ]--------------------------------------------------*/

const GlobalStyle = createGlobalStyle`
*
{
    margin: 0;
    border: none;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    padding: 0;
}

body
{
    max-width: 1440px;
    min-height: 100vh;
	
	margin: auto;
    overflow-x: hidden;

	display: flex;
	flex-direction: column;

}
`;

const LodgingStyled = styled.main`
	display: flex;
	flex-direction: column;

	.lodging {
		&_content {
			width: 100%;

			display: flex;
			justify-content: space-between;

			padding-left: 2%;
			padding-right: 2%;
			margin-top: 25px;

			color: #ff6060;

			@media screen and (max-width: 850px) {
				flex-direction: column;
			}

			&_infos {
				display: flex;
				flex-direction: column;
				gap: 10px;

				font-weight: 500;
				font-size: 14px;

				h1 {
					font-family: 'Montserrat';
					font-style: normal;
					font-weight: 500;
					font-size: 36px;
					line-height: 142.6%;
				}
				p {
					font-family: 'Montserrat';
					font-style: normal;
					font-weight: 500;
					font-size: 18px;
					line-height: 142.6%;
				}
				div {
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					margin-top: 6px;
				}

				@media screen and (max-width: 850px) {
					width: 100%;
				}
			}
			&_host {
				display: flex;
				flex-direction: column;
				gap: 5px;

				@media screen and (max-width: 850px) {
					width: 100%;
					margin-top: 30px;

					justify-content: space-between;
					flex-direction: row-reverse;
					align-items: center;
				}
				div {
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;
					gap: 0 10px;
				}
				&_name {
					align-self: center;
					flex-direction: column;

					font-family: 'Montserrat';
					font-style: normal;
					font-weight: 500;
					font-size: 18px;
					line-height: 142.6%;

					text-align: right;
				}
				img {
					width: 64px;
					height: 64px;

					object-fit: cover;
					object-position: center;
					border-radius: 50%;
				}
				&_stars {
					display: flex;
					gap: 10px;
					img {
						width: 30px;
						height: 30px;

						@media screen and (max-width: 425px) {
							width: 20px;
							height: 20px;
						}
					}
				}
			}
		}
		&_dropdown {
			width: 100%;

			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: flex-end;

			padding-left: 2%;
			padding-right: 2%;

			white-space: pre-wrap;

			&_item {
				width: 46%;
			}

			@media screen and (max-width: 850px) {
				&_item {
					width: 96%;
					justify-content: center;
				}
			}
		}
	}
`;
