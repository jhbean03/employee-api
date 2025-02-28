import { RouteComponentProps } from '@reach/router';
import React from 'react';

interface homeProps extends RouteComponentProps {

}

const Home: React.FC<homeProps> = ({}) => {
    return (<div>Home</div>)
}

export default Home