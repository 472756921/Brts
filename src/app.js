import React from 'react';
import { hydrate, render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Routes from './route';
render(
	<BrowserRouter>
		<Switch>
			{Routes?.map((it, i) => (
				<Route component={it.component} key={i} path={it.path} />
			))}
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
