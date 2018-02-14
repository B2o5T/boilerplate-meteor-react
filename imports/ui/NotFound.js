import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
		<div className="boxed-view">
			<div className="boxed-view__box">
				<h1>Page Not Found</h1>
				<h3>404</h3>
				<p>Hmmm, we'are unable to find that page..</p>
				<Link to="/" className="button button--link">Home Page</Link>
			</div>
		</div>
);
