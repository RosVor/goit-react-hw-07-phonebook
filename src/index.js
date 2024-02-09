import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/redux/store'; 
import App from './components/App'; 
import ErrorBoundary from 'components/redux/ErrorBoundary';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
);