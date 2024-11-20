import './App.css';
import BsState from './Context/BsState';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BsState>
      <Home />
      </BsState>
    </div>
  );
}

export default App;
