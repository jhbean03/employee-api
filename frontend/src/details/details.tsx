import { RouteComponentProps } from '@reach/router';
import React from 'react';

interface detailsProps extends RouteComponentProps {
    employeeId?: string;
}

const Details: React.FC<detailsProps> = ({employeeId}) => {
    return (<div>{employeeId || "Add new employee"}</div>)
}

export default Details