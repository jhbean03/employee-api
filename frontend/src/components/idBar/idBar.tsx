import { useState, Dispatch, SetStateAction } from 'react';
import './idBar.css';

interface Employee {
    first_name: string;
    last_name: string;
    skills: string[];
}

interface IDBarProps {
    setResults: Dispatch<SetStateAction<Employee | null>>;
}

export const IDBar = ({ setResults }: IDBarProps) => {
    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
        fetch(`http://${process.env.REACT_APP_SERVER_HOSTNAME}:${process.env.REACT_APP_SERVER_PORT}/employees/get/${value}`)
        .then((response) => {
            response.json()
            .then((json) => {
                console.log(json);
                setResults(json);
                return json;
            });
        });
    }

    const handleChange = (value: string) => {
        setInput(value);
        fetchData(value);
    }

    const handleClick = () => {
        handleChange(input);
    }

    return(
        <div id = "searchArea">
            <div id = "searchBarWrapper">
                <input 
                    id = "searchBar" 
                    placeholder = "Type to search..." 
                    value={input} 
                    onChange = {(e) => setInput(e.target.value)}
                />
            </div>
            <button id = "searchButton" onClick={handleClick}>Search</button>
        </div>
    )    
}