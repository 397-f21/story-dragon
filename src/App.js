import './App.css';
import { useData, setData } from './utilities/firebase.js';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import Available from './components/Available';
import Completed from './components/Completed';
import Contribute from './components/Contribute';
import Create from './components/Create';
import View from './components/View';
import react, { useEffect, useState } from 'react';


function App() {

  const [page, setPage] = useState("available");
  const [currentStory, setCurrentStory] = useState({});
  const [availableStories, setAvailableStories] = useState([]);
  const [completedStories, setCompletedStories] = useState([]);

  const [data, loadingData, errorData] = useData("/");

  useEffect(() => {
    if (data === undefined) return;
    const newAvailable = [];
    const newCompleted = [];
    data.forEach(story => {
      if (story.completed) newCompleted.push(story);
      else if (story.available) newAvailable.push(story);
    });
    setAvailableStories(newAvailable);
    setCompletedStories(newCompleted);
  }, [data])

  if (errorData) return <h1>{errorData}</h1>;
  if (loadingData) return <h1>Loading the data...</h1>;

  function getPage() {
    switch(page) {
      case "available":
        return <Available availableStories={availableStories} setCurrentStory={setCurrentStory} setPage={setPage}/>;
      case "completed":
        return <Completed completedStories={completedStories} setCurrentStory={setCurrentStory} setPage={setPage}/>;
      case "create":
        return <Create />;
      case "contribute":
        return <Contribute currentStory={currentStory} />;
      case "view":
        return <View currentStory={currentStory}/>;
    }
  }

  return (
    <div>
      <div className="nav-bar">
        <Banner />
        <Navigation page={page} setPage={setPage} />
      </div>
      <div>
        {getPage()}
      </div>
    </div>
  );
}

export default App;
