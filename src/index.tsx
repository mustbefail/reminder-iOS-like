import { render } from 'react-dom';
import '@fortawesome/fontawesome-free/js/all';
import './index.scss';

import App from './App';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
