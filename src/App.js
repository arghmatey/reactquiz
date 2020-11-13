import './App.css';
import TriviaSelectForm from './components/TriviaSelectForm';
import * as api from './utils/api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TriviaSelectForm />
      </header>
    </div>
  );
}

export default App;
