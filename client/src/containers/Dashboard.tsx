import React, { Component } from 'react';

import WorkoutOverview from '../components/WorkoutOverview';

class Dashboard extends Component {

    render() {
        return (
            <div className="h-screen mx-32 my-8 rounded-lg shadow-xl bg-blue-200">
                <WorkoutOverview />
            </div>
        );
    }
}

export default Dashboard;
