import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import GlobalContext from './contexts/GlobalContext';


function App(props) {

  const [GlobalState, updateGlobalState] = React.useState({ expression:'', answer:0, history:''});

  return (
    <GlobalContext.Provider value={{GlobalState, updateGlobalState}}>
        <div className="App">
          <header className="App-header">
            <Calculator/>
          </header>
        </div>
    </GlobalContext.Provider>
  );
}

export default App;
