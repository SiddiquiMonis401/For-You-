import React from 'react';


// Routes
import Routes from 'routes';

// Components
import { ErrorBoundary } from 'components/common';

// New Hooks introduction
import {useSelector,useDispatch} from 'react-redux';

// Actions
import { simpleAction } from './redux/actions';


function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.simpleReducer);
  console.log(data);
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes />
        <button type="button" onClick={() => dispatch(simpleAction())}>Check</button>
      </div>
    </ErrorBoundary>
  );
}

export default App;
