import './resultList.css'
import { Employee, SearchInput } from '../../App'

export const ResultList = ({ input }: SearchInput) => {
    return(
        <p>You typed: {input}</p>
    );
};