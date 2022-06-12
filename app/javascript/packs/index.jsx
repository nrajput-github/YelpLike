// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from '../components/App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from '../components/context'

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <React.StrictMode>
           <AppProvider>
      <App/>
      </AppProvider>
       </React.StrictMode>,
      document.body.appendChild(document.createElement('div')),
    )
  })
  serviceWorker.unregister();