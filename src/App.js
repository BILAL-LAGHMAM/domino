import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Domino from './components/Domino';

function App() {
  return (
    <div className="App">
      <Domino cache={3} />
    </div>
  );
}

export default App;
