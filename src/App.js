import './App.css';
import ThrowButton from './components/mainMenu/throwButton.js';
import ThrowHistory from './components/mainMenu/throwHistory.js';
import logo from './img/tarot_logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="MainMenu__Logo" src={logo} alt="Logo"></img>
      <ThrowButton className="MainMenu__BeginButton"></ThrowButton>
      <ThrowHistory></ThrowHistory>
    </div>
  );
}

export default App;
