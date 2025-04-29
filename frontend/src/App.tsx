import { StringMappingType } from 'typescript';
import './App.css';
import { ResultList } from './components/resultList/resultList';
import React, { useState, useEffect } from 'react';

export interface SearchInput {
  input: string;
  employees: Employee[];
}

export interface Employee {
  first_name: string;
  last_name: string;
  skills: string[];
}

function App() {
  const [searchIn, setSearchIn] = useState({ input: "" });
  const [employees, setEmployees] = useState<Employee[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIn({ input: e.target.value })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch(`http://${import.meta.env.VITE_APP_SERVER_HOSTNAME}:${import.meta.env.VITE_APP_SERVER_PORT}/employees/get/all`);
          const data = await response.json();
          setEmployees(data);
      } catch (e) {
          console.error("Error fetching employee data from the database:", e);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="App">
      <h1 className="text-red-500">Employee Database</h1>
      <p>Please enter an employee name to obtain information about them below.</p>

      <div id = "searchArea">
        <div id = "searchBarWrapper">
          <input id = "searchBar" placeholder = "Type to search..." value={searchIn.input} onChange={handleSearchChange}/>
        </div>
      </div>

      <ResultList input={searchIn.input} employees={employees}></ResultList>

    </div>
  );
}

export default App;
