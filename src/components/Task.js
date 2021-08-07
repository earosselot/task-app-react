import React, {Component} from "react"

class Task extends Component {
    constructor(props) {
        super(props)
        this.handleStartEditingTask = this.handleStartEditingTask.bind(this)
        this.handleTaskRemove = this.handleTaskRemove.bind(this)
    }

    handleStartEditingTask(e) {
        e.preventDefault()
        this.props.onEditClick(this.props.task.id)
    }

    handleTaskRemove(e) {
        e.preventDefault()
        this.props.onTaskRemoveClick(this.props.task.id)
    }

    render() {
        return (
            <div>
                <span>{this.props.task.text}</span>
                <button onClick={this.handleStartEditingTask}>Edit</button>
                <button onClick={this.handleTaskRemove}>X</button>
            </div>
        )
    }
}

export default Task