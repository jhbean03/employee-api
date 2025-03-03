import { useState, Dispatch, SetStateAction } from 'react';
import './idBar.css';

interface IDBarProps {
    setResults: Dispatch<SetStateAction<never[]>>
}

export const IDBar = ({ setResults }: IDBarProps) => {
    const [input, setInput] = useState("");

    const fetchData = (value: string) => {
        try {
            fetch(value)
            .then((response) => {
                response.json()
                .then((json) => {
                    return json;
                });
            });
        } catch(error) {
            console.error("Testing some stuff");
            return "";
        }
    }

    const handleChange = (value: string) => {
        setInput(value);
        fetchData(value);
    }

    return(
        <div id = "searchArea">
            <div id = "searchBarWrapper">
                <input 
                    id = "searchBar" 
                    placeholder = "Type to search..." 
                    value={input} 
                    onChange = {(e) => handleChange(e.target.value)}
                />
            </div>
            <button id = "searchButton">Search</button>
        </div>
    )    
}