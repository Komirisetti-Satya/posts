import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Createpost from './components/createpost';

ReactDOM.render(
    <Createpost/>
,
 document.getElementById('root'));
registerServiceWorker();
