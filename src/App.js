import './App.css';
import { useState } from 'react'
import StreetNameSign from './components/StreetNameSign';

function App() {

  const [address, setAddress] = useState({})

  function handleAddress(event) {

    const cep = event.target.value;

    // CEP examples:
    // 01001000
    // 03650010
    // 01302907
    // 03307005     

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          setAddress({
            cep,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf,
          })
        })

    }
  }

  return (
    <div className="App">
        <input
          placeholder="Digite o CEP"
          maxLength="8"
          onChange={handleAddress}
        />
        <StreetNameSign address={address} />
    </div>
  );
}

export default App;
