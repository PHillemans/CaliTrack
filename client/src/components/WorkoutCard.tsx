import React, { Component } from 'react';


type WorkoutCardProp = {
    Title: String
}

class WorkoutCard extends Component<WorkoutCardProp> {
    constructor(props: WorkoutCardProp) {
        super(props);
    }

    render() {
        return (
            <div className="w-1/4 p-2">
                <div className="rounded-lg m-6 p-3 h-40 bg-gray-200 text-center">
                    <div className="mx-4 rounded-full bg-red-400 text-white">{this.props.Title}</div>
                    <div>Dit is een beschrijving van de workout</div>
                </div>
            </div>
        );
    }
}

export default WorkoutCard;
