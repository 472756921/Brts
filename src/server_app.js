import Routes from './route';
import React from 'react';
import { Route, StaticRouter, Switch } from 'react-router-dom';

const RenderSSR = (req) => (
	<StaticRouter location={req.path}>
		<Switch>
			{Routes?.map((it, i) => (
				<Route component={it.component} key={i} path={it.path} />
			))}
		</Switch>
	</StaticRouter>
);

export { RenderSSR };
