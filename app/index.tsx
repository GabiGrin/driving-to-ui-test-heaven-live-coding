import * as React from 'react';
import ReactDOM from 'react-dom';

import { Counter } from './counter';

const root = document.getElementById('root');

if (root) {
	ReactDOM.render(<Counter/>, root)
}
