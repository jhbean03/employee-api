import { SearchInput, Employee } from '../../App'

export const ResultList = ({ input, employees }: SearchInput) => {
    const filterEmployeeData = () => {
        if (input === "") {
            return employees;    
        }

        let filteredEmployees: Employee[];
        filteredEmployees = [];
        for (let employee of employees) {
            employee.skills.sort()
            let lowerInput = input.toLowerCase()
            if (employee.first_name.toLowerCase().includes(lowerInput) || employee.last_name.toLowerCase().includes(lowerInput)) {
                filteredEmployees.push(employee);
            } else {
                let indexOfSkill = -1;
                for (let skill of employee.skills) {
                    if (skill.toLowerCase().includes(lowerInput) && !filteredEmployees.includes(employee)) {
                        indexOfSkill = employee.skills.indexOf(skill);
                        filteredEmployees.push(employee);
                    }
                }

                if (indexOfSkill !== -1) {
                    [employee.skills[0], employee.skills[indexOfSkill]] = [employee.skills[indexOfSkill], employee.skills[0]]
                }
            }
        }
        return filteredEmployees;
    };

    let filteredEmployees = filterEmployeeData();

    return(
        <div className="grid grid-cols-5 justify-items-center mt-[2.5em] gap-[1em] pb-[1em]">
            {filteredEmployees.map(employee => 
                <div className="bg-zinc-700/75 p-[2em] w-[15em] rounded-[20px] transition duration-300 hover:bg-sky-500">
                    <div>{employee.first_name}</div>
                    <div> {employee.last_name}</div>
                    <div className="mt-[1em] mb-[0.5em]"><u>Skills</u></div>
                    <div>
                        {employee.skills.length === 0 && "No skills listed."}
                        <ul className="list-disc text-left mb-[0.5em]">
                        {employee.skills.slice(0,3).map(skill =>
                            <li>{skill}</li>
                        )}
                        </ul>
                        <i>{employee.skills.length > 3 && employee.skills.length - 3 + " more skill(s)"}</i>
                    </div>
                </div>
            )}
        </div>
    );
};