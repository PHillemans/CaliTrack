import React, { Component } from 'react';


type WorkoutCardProp = {
    Title: String
}

class WorkoutCard extends Component<WorkoutCardProp> {
    render() {
        return (
            <div className="md:w-1/4 sm:w-1/2">
                <div className="divide-y-2 divide-gray-620 rounded-lg m-6 p-3 h-40 bg-gray-200 text-center">
                    <div className="">{this.props.Title}</div>
                    <div>Dit is een beschrijving van de workout</div>
                </div>
            </div>
        );
    }
}

export default WorkoutCard;
