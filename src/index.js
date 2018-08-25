import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Resume from './components/Resume'
import 'semantic-ui-css/semantic.min.css';
import { person } from './person';

ReactDOM.render(
    <Resume jsonResume={person} />, document.getElementById('root')
);

registerServiceWorker();
