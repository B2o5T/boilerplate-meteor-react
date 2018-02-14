import React from 'react';
import PrivateHeader from './PrivateHeader';

export default (props) => (
		<div>
			<PrivateHeader title="Dashboard" history={props.history} />
			<div className="page-content">
				Dashboard page content
			</div>
		</div>
);
