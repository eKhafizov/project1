import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import {commentsArray as comments, locations } from './mocks/offers';
import { Provider } from 'react-redux';
import store from './store';
import ErrorMessage from './components/error_message';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        //offers={offers}
        comments={comments}
        locations={locations}
      />
    </Provider>
  </React.StrictMode>,
);

