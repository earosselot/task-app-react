import React, { Component } from "react"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"
import uniqid from "uniqid"

class TaskApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {id: uniqid(), text: 'first task', editing: false},
                {id: uniqid(), text: 'second task', editing: false},
                {id: uniqid(), text: 'third task', editing: true},
                {id: uniqid(), text: 'cuarta task', editing: false},
            ],
            task: {
                text: '',
                id: uniqid(),
                editing: false,
            }
        }
        this.handleAddTaskInputChange = this.handleAddTaskInputChange.bind(this)
        this.handleAddTaskSubmit = this.handleAddTaskSubmit.bind(this)
        this.handleStartEditingTask = this.handleStartEditingTask.bind(this)
        this.handleEditTaskChange = this.handleEditTaskChange.bind(this)
        this.handleEditTaskSubmit = this.handleEditTaskSubmit.bind(this)
        this.handleTaskRemove = this.handleTaskRemove.bind(this)
    }

    handleAddTaskInputChange(taskText) {
        this.setState(() => {
            return {
                task: {
                    text: taskText,
                    id: this.state.task.id,
                    editing: this.state.task.editing,
                },
            }
        })
    }

    handleAddTaskSubmit() {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(this.state.task),
                task: {
                    text: '',
                    id: uniqid(),
                    editing: false
                }
            }
        })
    }

    handleStartEditingTask(taskId) {
        let newTasksArray = this.state.tasks.map(task => {
            if (task.id === taskId) {
                task.editing = !task.editing
                return task
            } else {
                return task
            }
        })
        this.setState(() => {
            return {
                tasks: newTasksArray,
            }
        })
    }

    handleEditTaskChange(taskId, taskText) {
        let newTasksArray = this.state.tasks.map(task => {
            if (task.id === taskId) {
                task.text = taskText
                return task
            } else {
                return task
            }
        })
        this.setState(() => {
            return {
                tasks: newTasksArray,
            }
        })
    }

    handleEditTaskSubmit(taskId) {
        let newTasksArray = this.state.tasks.map(task => {
            if (task.id === taskId) {
                task.editing = !task.editing
                return task
            } else {
                return task
            }
        })
        this.setState(() => {
            return {
                tasks: newTasksArray,
            }
        })
    }

    handleTaskRemove(taskId) {
        let newTasksArray = this.state.tasks.filter(task => task.id !== taskId)
        this.setState(() => {
            return {
                tasks: newTasksArray,
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Task App</h2>
                <AddTask
                    task={this.state.task}
                    onAddTaskChange={this.handleAddTaskInputChange}
                    onAddTaskSubmit={this.handleAddTaskSubmit}
                />
                <TaskList
                    tasks={this.state.tasks}
                    onEditClick={this.handleStartEditingTask}
                    onEditChange={this.handleEditTaskChange}
                    onEditTaskSubmit={this.handleEditTaskSubmit}
                    onTaskRemoveClick={this.handleTaskRemove}
                />
            </div>
        )
    }
}

export default TaskApp
