import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Dropdown from '../components/dropDown/DropDown';
import FooterD from '../components/footer/FooterD';
import HeaderD from '../components/header/HeaderD';
import TopSection from '../components/topSection/TopSection';
import topImg from '../utils/images/img-aboutUs.png';

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

a
{
    text-decoration: none;
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

const DropDownContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	justify-content: center;
`;

const AboutUsDStyled = styled.main`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const AboutUsSectionStyled = styled.section`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

function AboutUsD() {
	return (
		<AboutUsDStyled>
			<GlobalStyle />
			<HeaderD />
			<TopSection imgSrc={topImg} text='' />
			<AboutUsSectionStyled>
				<DropDownContainer>
					<Dropdown
						DropDownName='Fiabilité'
						DropDownContent='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
					/>
					<Dropdown
						DropDownName='Respect'
						DropDownContent='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
					/>
					<Dropdown
						DropDownName='Service'
						DropDownContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
					/>
					<Dropdown
						DropDownName='Sécurité'
						DropDownContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
					/>
				</DropDownContainer>
			</AboutUsSectionStyled>

			<FooterD />
		</AboutUsDStyled>
	);
}

export default AboutUsD;
