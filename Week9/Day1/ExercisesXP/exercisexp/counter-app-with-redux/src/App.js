import React from 'react';
import './App.css';
import Counter from './components/Counter';
import {store} from './reducers/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Counter/>
    </React.Fragment>
    </Provider>
  );
}

export default App;
