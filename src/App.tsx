import React from 'react';
import { PageIndex } from './pages/index';
import './App.css';

function App() {
  if (window.innerWidth < 700) {
    return (
      <div className='App-no-mobile'>
        <h1>
          ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
        </h1>
      </div>
    );
  }

  return (
    <div className='App'>
      <PageIndex />
    </div>
  );
}

export default App;
