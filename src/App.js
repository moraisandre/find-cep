import logo from './logo.svg';
import './App.css';
import StreetNameSign from './components/StreetNameSign';

function App() {
  return (
    <div className="App">
        <input placeholder="Digite o CEP"></input>
        <StreetNameSign />
    </div>
  );
}

export default App;
