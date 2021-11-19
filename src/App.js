import './App.css';
import { useData } from './utilities/firebase.js';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import Available from './components/Available';
import Completed from './components/Completed';
import Contribute from './components/Contribute';
import Create from './components/Create';
import View from './components/View';
import { useEffect } from 'react';
import useStore from './Store';

function App() {
  const [data, loadingData, errorData] = useData("/");
  const page = useStore(state => state.page);
  const setAvailableStories = useStore(state => state.setAvailableStories);
  const setCompletedStories = useStore(state => state.setCompletedStories);
  const setAllStories = useStore(state => state.setAllStories)

  useEffect(() => {
    
    if (data === undefined) return;
    
    const newAvailable = [];
    const newCompleted = [];
    console.log("data", data);
    setAllStories(data);
    data.forEach(story => {
      if (story.completed) newCompleted.push(story);
      else if (story.available) newAvailable.push(story);
    });
    setAvailableStories(newAvailable);
    setCompletedStories(newCompleted);
  }, [data, setAvailableStories, setCompletedStories, setAllStories])

  if (errorData) return <h1>{errorData}</h1>;
  if (loadingData) return <h1>Loading the data...</h1>;

  function getPage() {
    switch (page) {
      case "available":
        return <Available />;
      case "completed":
        return <Completed />;
      case "create":
        return <Create />;
      case "contribute":
        return <Contribute />;
      case "view":
        return <View />;
      default:
        return <p>Sorry, there's been an error.</p>
    }
  }

  return (
    <div>
      <header className="nav-bar">
        <Banner />
        <Navigation />
      </header>
      <div>
        {getPage()}
      </div>
    </div>
  );
}

export default App;
