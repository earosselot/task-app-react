import React, { Component } from "react"
import Task from "./Task"
import TaskEdit from "./TaskEdit"

class TaskList extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { tasks, onEditClick, onEditChange, onEditTaskSubmit, onTaskRemoveClick } = this.props

        return (
            <div>
                <h4>Task List</h4>
                <ul>
                    {tasks.map(task => {
                        if (task.editing) {
                            return (
                            <li key={task.id}>
                                <TaskEdit
                                    task={task}
                                    onEditChange={onEditChange}
                                    onEditTaskSubmit={onEditTaskSubmit}
                                />
                            </li>
                            )
                        } else {
                            return (
                                <li key={task.id}>
                                    <Task
                                        task={task}
                                        onEditClick={onEditClick}
                                        onTaskRemoveClick={onTaskRemoveClick}
                                    />
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default TaskList
