import './App.css';
import { useData, setData } from './utilities/firebase.js';
import Banner from './components/Banner';
import Navigation from './components/Navigation';

function App() {

  return (
    <div>
      <Banner></Banner>

      <div>
        <p>App body</p>
      </div>

      <Navigation></Navigation>
    </div>
  );
}

export default App;
