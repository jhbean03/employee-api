import './App.css';
import { IDBar } from './components/idBar/idBar';
import { useState } from 'react';
import { ResultList } from './components/resultList/resultList';

interface Employee {
  first_name: string;
  last_name: string;
  skills: string[];
}

function App() {
  const [results, setResults] = useState<Employee | null>(null);

  return (
    <div className="App">
      <h1>Employee Database</h1>
      <p>Please enter an employee ID to obtain information about their related skills below.</p>
      <IDBar setResults={setResults}/>
      {!results ? <p>Not Found</p> : <ResultList results={results}></ResultList>}
    </div>
  );
}

export default App;
