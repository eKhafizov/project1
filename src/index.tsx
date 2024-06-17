import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import {locations } from './mocks/offers';
import { Provider } from 'react-redux';
import store from './store';
import ErrorMessage from './components/error_message';
import {checkAuthAction, fetchOffersAction, fetchFavouritesAction} from './store/api-actions/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavouritesAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        locations={locations}
      />
    </Provider>
  </React.StrictMode>,
);

