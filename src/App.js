import React from 'react';
import Login from './pages/login/login';
import MainFrame from './component/mainFrame';
import './style.css';
import 'leaflet/dist/leaflet.css';
import DataProvider from './dataProvider/provider';

function App() {
  return (
    <DataProvider>
      <div className="App">
        {localStorage.getItem('user') ? <MainFrame /> : <Login />}
      </div>
    </DataProvider>
  );
}

export default App;
