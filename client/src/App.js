import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Componentes
import Header  from './components/Header';
import Clientes  from './components/Clientes';
import AgregarCliente  from './components/AgregarCliente';

function App() {

  const [clientes, setClientes] = useState([]);
  const [recarga, setRecarga] = useState(true);

  useEffect(() =>{
    if(recarga) {
      const consultarApi = async() => {
        const resultado = await axios.get('http://localhost:8000/api/registro/list');
        
        setClientes(resultado.data)
      }
      consultarApi();

      setRecarga(false);
    }
  }, [recarga])

  return (
      <Router>
        <Header/>
        <main className="container mt-5">
          <Switch>
              <Route exact path="/" 
                render={() => (
                  <Clientes
                    clientes={clientes}
                  />
              )}/>
              <Route exact path="/nuevo-cliente" 
                render={() => (
                  <AgregarCliente
                  setRecarga={setRecarga}
                  />
              )}/>
          </Switch>
        </main>
      </Router>
  );
}

export default App;
