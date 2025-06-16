

import * as React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div style={{ fontFamily: 'sans-serif', textAlign: 'center', paddingTop: '20%' }}>
    <h1>ProjectChain Marketplace</h1>
    <p>Welcome to the web version of ProjectChain Marketplace!</p>
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

