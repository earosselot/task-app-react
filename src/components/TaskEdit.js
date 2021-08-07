import React, {Component} from "react"

class TaskEdit extends Component {
    constructor(props) {
        super(props)
        this.handleEditTaskChange = this.handleEditTaskChange.bind(this)
        this.handleEditTaskSubmit = this.handleEditTaskSubmit.bind(this)
    }

    handleEditTaskChange(e) {
        e.preventDefault()
        this.props.onEditChange(this.props.task.id, e.target.value)
    }

    handleEditTaskSubmit(e) {
        e.preventDefault()
        this.props.onEditTaskSubmit(this.props.task.id)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEditTaskSubmit}>
                    <input
                        type="text"
                        value={this.props.task.text}
                        onChange={this.handleEditTaskChange}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default TaskEdit
