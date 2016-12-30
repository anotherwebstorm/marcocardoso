import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import createRoutes from '../src/routes';

ReactDOM.render(
	createRoutes(browserHistory),
	window.document.getElementById('app')
);
