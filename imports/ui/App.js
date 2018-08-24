import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import { createDiagram } from './Diagram.js';
var myDiagram;
// App component - represents the whole app
class App extends Component {
    state = false;
    renderTasks() {
        if (this.state == false) {
            this.state = true;
            myDiagram = createDiagram();
        }
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} diagram={myDiagram} />
        ));
    }

    render() {
        return (
            <div>
                {this.renderTasks()}
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch(),
    };
})(App);