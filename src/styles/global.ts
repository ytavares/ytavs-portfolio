import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

import teste from '../../public/images/pattern.png';


export const GlobalStyles = createGlobalStyle`
	html,
	body {
		padding: 0;
		margin: 0 auto;
		font-family: 'Bai Jamjuree', sans-serif;
		background: #141416;
		background-image: url(${teste.src});
		scroll-behavior: smooth;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

`;

export const TemplateComponent = styled.div`

`