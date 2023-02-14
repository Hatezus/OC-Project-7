import React, {Component} from 'react';

import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import AboutUsM from './pages/AboutUsM';
import AboutUsD from './pages/AboutUsD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AboutUsM />
		</BrowserRouter>
	</React.StrictMode>
);
