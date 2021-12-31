import React, { useEffect } from 'react';
import Card from '@components/card';
import { StoreState } from '@store/config_store';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '@store/reducers/healt_reducer';
import logo from './logo.svg';
import './App.css';

function App() {
  const healtStatus = useSelector((state: StoreState) => state.healt.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateStatus());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          StatusStore <code>{healtStatus}</code>
        </p>
        <Card />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
