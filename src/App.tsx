import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GloabalStyle from './styles/global';

import AppProvider from './hooks';
import Routes from './routes/index';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GloabalStyle />
  </Router>
);

export default App;
