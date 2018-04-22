/**
 * Created by Indra on 4/21/2018.
 */
// //////////////////// Project and Author Info ///////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

console.log('%cReact base ', 'color: #ff6e08;font-size: 20px');
console.log('%cCreated by ', 'color: #666;font-size: 12px');
console.log('%cIndra Jeet <indrajeet0510@hotmail.com> ', 'color: #07c; font-size: 14px');
ReactDOM.render(
    <App/>,
    document.getElementById('app'),
);
module.hot.accept();
