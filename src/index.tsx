import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import {offersArray as offers, commentsArray as comments} from './mocks/offers';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
);

