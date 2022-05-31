import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './templates/App';

import ContextGlobal from './contexts/cartContext';

import GlobalStyles from './styles/global-styles';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ContextGlobal>
        <GlobalStyles />
        <Header />
        <App />
        <Footer />
     </ContextGlobal>
  </React.StrictMode>
)
