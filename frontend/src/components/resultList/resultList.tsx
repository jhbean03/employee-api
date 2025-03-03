import './resultList.css'

interface ResultListProps {
    results: never[]
}

export const ResultList = ({ results } : ResultListProps) => {
    return (
    <div id = "resultsList">
         <div id = "employeeName"><b>Employee Name:</b> Grace Hauck</div>
         <div id = "skills">
            <b>Skills:</b>
            <ul id = "skillsList">
                <li>UI/UX Principles</li>
                <li>Graphic Design</li>
                <li>Public Speaking</li>
            </ul>
         </div>

         <div id = "error">
            Error: Employee Not Found
         </div>

         <div id = "error">
            {results[0]}
         </div>
    </div>
    );
};