import * as React from 'react';

import WorkoutCard from '../components/WorkoutCard';

class Dashboard extends React.Component {
    render() {
        return (
            <div className=" bg-gray-100">
                <div className="h-screen ml-10 mr-10 bg-blue-700">
                    <div className="w-1/6 "><WorkoutCard/></div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
