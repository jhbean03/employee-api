import './App.css';
import { IDBar } from './components/idBar/idBar';
import { useState } from 'react';
import { ResultList } from './components/resultList/resultList';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1>Employee Database</h1>
      <p>Please enter an employee ID to obtain information about their related skills below.</p>
      <IDBar setResults={setResults}/>
      <ResultList results={results}></ResultList>
    </div>
  );
}

export default App;
