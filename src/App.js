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
  const [currentStory, setCurrentStory] = useState({
    "available": true,
    "completed": false,
    "genre": "Romance",
    "max_contributors": 5,
    "num_contributors": 1,
    "text": "Once upon a time, there was a princess who lived in a castle."
});

  const [data, loadingData, errorData] = useData("/");

  if (errorData) return <h1>{errorData}</h1>;
  if (loadingData) return <h1>Loading the data...</h1>;
  
  console.log(data);
  
  function getPage() {
    switch(page) {
      case "available":
        return <Available data={data} setCurrentStory={setCurrentStory}/>;
      case "completed":
        return <Completed data={data} setCurrentStory={setCurrentStory}/>;
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
