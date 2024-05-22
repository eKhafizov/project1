import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import {offersArray as offers, locationType as location, commentsArray as comments} from './mocks/offers';
import { Provider } from 'react-redux';
import store from '../src/store/index';

const city = {
  lat:  52.3909553943508,
  lng: 4.85309666406198,
  zoom: 10
};
export type City = {
  lat: number;
  lng: number;
  zoom: number;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        location={location}
        city={city}
        comments={comments}
      />
    </Provider>
  </React.StrictMode>,
);

export {city};
