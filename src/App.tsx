import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from '@routes/config_routes';
// import { StoreState } from '@store/config_store';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateStatus } from '@store/reducers/healt_reducer';
import './App.css';
import Navbar from '@components/navbar';

function App() {
  // const healtStatus = useSelector((state: StoreState) => state.healt.status);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(updateStatus());
  }, []);

  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <RoutesConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
