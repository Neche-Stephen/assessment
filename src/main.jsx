import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import ClipLoader from "react-spinners/ClipLoader";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <PersistGate loading={<ClipLoader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
