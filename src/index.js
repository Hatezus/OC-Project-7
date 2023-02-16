import React, {Component} from 'react';

import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import HomeD from './pages/HomeD';
import HomeM from './pages/HomeM';

import AboutUsM from './pages/AboutUsM';
import AboutUsD from './pages/AboutUsD';

import ErrorPageD from './pages/ErrorPageD';
import ErrorPageM from './pages/ErrorPageM';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path='/Home'>
					{window.innerWidth > 375 ? <HomeD /> : <HomeM />}
				</Route>
				<Route exact path='/About us'>
					{window.innerWidth > 375 ? <AboutUsD /> : <AboutUsM />}
				</Route>
				<Route exact path='/*'>
					{window.innerWidth > 375 ? <ErrorPageD /> : <ErrorPageM />}
				</Route>
				{/* <Route exact path='/*'>
					{window.innerWidth > 375 ? <LodgingD /> : <LodgingM />}
				</Route> */}
			</Switch>
		</BrowserRouter>
	</React.StrictMode>
);
