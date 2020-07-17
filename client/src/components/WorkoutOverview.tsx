import React, { Component } from 'react';

import WorkoutCard from './WorkoutCard';

class WorkoutOverview extends Component {

    workouts: string[] = [
        'workout1',
        'workout2',
        'workout3',
        'workout4',
        'workout4',
        'workout4',
        'workout4',
        'workout4',
        'workout5'
    ];

    workoutsToShow = this.workouts.map((workout:string)=>{
        return (
            <WorkoutCard Title={workout} />
        )
    });

    render() {
        return (
            <div className="flex flex-wrap">
                {this.workoutsToShow}
            </div>
        )
    }
}

export default WorkoutOverview;
