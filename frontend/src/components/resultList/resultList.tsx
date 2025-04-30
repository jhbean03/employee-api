import './resultList.css'
import { SearchInput } from '../../App'

export const ResultList = ({ input, employees }: SearchInput) => {
    const filterEmployeeData = () => {
        if (input === "") {
            return [];    
        }

        let filteredEmployees = [];
        for (let employee of employees) {
            if (employee.first_name.includes(input) || employee.last_name.includes(input)) {
                filteredEmployees.push(employee);
            } else {
                for (let skill of employee.skills) {
                    if (skill.includes(input)) {
                        filteredEmployees.push(employee);
                    }
                }
            }
        }
        return filteredEmployees;
    };

    let filteredEmployees = filterEmployeeData();
    console.log(filteredEmployees);

    return(
        <div id="employees">
            {filteredEmployees.map(employee => 
                <div className="employee">
                    <div className="first-name">{employee.first_name}</div>
                    <div className="last-name">{employee.last_name}</div>
                    <div className="skills">{employee.skills}</div>
                </div>
            )}
        </div>
    );
};