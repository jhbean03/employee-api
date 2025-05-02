import { StringMappingType } from 'typescript';
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
    <div className="text-center animate-fadeIn">
      <h1 className="text-5xl mt-[0.5em] mb-[0.5em]">Employee Database</h1>
      <p className="text-xl mb-[1em]">Please enter an employee name to obtain information about them below.</p>

      <div className="flex justify-center">
        <div className="bg-white w-2/5 rounded-[10px] h-[2.5rem] pl-[15px] pr-[15px] shadow-[0_0_8px_#ddd]">
          <input className="h-[100%] w-[100%] text-[1.25em] focus:outline-none text-gray-500" placeholder = "Type to search..." value={searchIn.input} onChange={handleSearchChange}/>
        </div>
      </div>

      <p className="text-xl mt-[1em]"><i>Note: You may need to scroll on an employee's skills to see all of them!</i></p>

      <ResultList input={searchIn.input} employees={employees}></ResultList>

    </div>
  );
}

export default App;
