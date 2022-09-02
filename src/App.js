import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Landing from './Components/Landing';
function App() {
  return (
    <Router>
    <div className="App">
      </div>
      <Routes>
        <Route exact path='/' element={<Landing />} ></Route>
        </Routes>
    </Router>
  );
}

export default App;
