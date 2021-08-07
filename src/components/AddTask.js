import React, { Component } from "react"

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.handleAddTaskInputChange = this.handleAddTaskInputChange.bind(this)
        this.handleAddTaskSubmit = this.handleAddTaskSubmit.bind(this)
    }

    handleAddTaskInputChange(e) {
        e.preventDefault()
        this.props.onAddTaskChange(e.target.value)
    }

    handleAddTaskSubmit(e) {
        e.preventDefault()
        this.props.onAddTaskSubmit()
    }

    render() {
        const task = this.props.task

        return (
            <div>
                <form onSubmit={this.handleAddTaskSubmit}>
                    <input
                        type="text"
                        placeholder="Add new task..."
                        value={task.text}
                        onChange={this.handleAddTaskInputChange}
                        minLength="3"
                    />
                    <button type="submit">+</button>
                </form>
            </div>
        )
    }
}

export default AddTask
