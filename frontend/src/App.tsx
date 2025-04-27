import './App.css';
import { ResultList } from './components/resultList/resultList';
import React, { useState } from 'react';

export interface Employee {
  first_name: string;
  last_name: string;
  skills: string[];
}

export interface SearchInput {
  input: string;
}

function App() {
  const [searchIn, setSearchIn] = useState({ input: "" });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIn({ input: e.target.value })
  }
  
  return (
    <div className="App">
      <h1>Employee Database</h1>
      <p>Please enter an employee name to obtain information about them below.</p>

      <div id = "searchArea">
        <div id = "searchBarWrapper">
          <input id = "searchBar" placeholder = "Type to search..." value={searchIn.input} onChange={handleSearchChange}/>
        </div>
      </div>

      <ResultList input={searchIn.input}></ResultList>

    </div>
  );
}

export default App;
