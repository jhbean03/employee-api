import './resultList.css'
import { SearchInput } from '../../App'

export const ResultList = ({ input, employees }: SearchInput) => {
    const filterEmployeeData = () => {
        let filteredEmployees = [];
        for (let employee of employees) {
            if (employee.first_name.includes(input) || employee.last_name.includes(input)) {
                filteredEmployees.push(employee);
            }
            for (let skill of employee.skills) {
                if (skill.includes(input)) {
                    filteredEmployees.push(employee);
                }
            }
        }
        return filteredEmployees;
    };

    let eDiv = document.getElementById("employees")
    if (eDiv) {
        eDiv.remove();
    }

    return(
        <div id="employees">
            {filterEmployeeData().map(employee => 
                <div key={employee.first_name}>
                    {employee.first_name}
                    {employee.last_name}
                    {employee.skills}
                </div>
            )}
        </div>
    );
};