import React, {Component} from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import HomeD from './pages/HomeD';
import TopSection from './components/top-section/TopSection';
import TopSectionImg from './components/top-section/TopSectionImg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HomeD />
		</BrowserRouter>
	</React.StrictMode>
);
