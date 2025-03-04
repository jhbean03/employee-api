import './resultList.css'

interface Employee {
    first_name: string;
    last_name: string;
    skills: string[];
}

interface ResultListProps {
    results: Employee | null;
}

export const ResultList = ({ results } : ResultListProps) => {
    if (!results || results.first_name == null) {
        return (
            <div id = "resultsList">
                <div id = "error">
                    Error: Employee information could not be found.
                </div>
            </div>
        );
    }

    return (
        <div id = "resultsList">
            <div id = "employeeName"><b>Employee Name:</b> {results.first_name} {results.last_name}</div>
            <div id = "skills">
                <b>Skills:</b>
                <ul id = "skillsList">
                    {results.skills?.length > 0 ? (
                        results.skills.map((skill, index) => <li key={index}>{skill}</li>)
                    ) : (
                        <li>No skills listed</li>
                    )}
                </ul>
            </div>
        </div>
    );
};