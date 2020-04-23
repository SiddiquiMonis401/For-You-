import React from 'react';

// Routes
import Routes from 'routes';

// Components
import { ErrorBoundary } from 'components/common';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes />
      </div>
    </ErrorBoundary>
  );
}

export default App;
