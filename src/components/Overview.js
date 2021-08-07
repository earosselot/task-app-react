import React, { Component } from "react";

class Overview extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleEditing = this.handleEditing.bind(this)
        this.startEditing = this.startEditing.bind(this)
    }

    handleDeleteClick(e) {
        this.props.onDeleteButton(e.target.parentNode.id)
    }

    handleEditing(e) {
        this.props.onEditingField(e)
    }

    startEditing(e) {
        this.props.onStartEditing(e.target.parentNode.id)
    }

    render() {
        const { tasks } = this.props
        return (
            <div>
                <ul>
                    {tasks.map((task, i) => {
                        if (!task.editing) {
                            return <li
                                key={task.id}
                                id={task.id}>
                                    {i+1}. {task.text}
                                    <button onClick={this.startEditing}>edit</button>
                                    <button onClick={this.handleDeleteClick}>x</button>
                            </li>;
                        }
                        return <input
                            value={this.props.task}
                            onChange={this.handleEditing}
                            type="text"
                            id="taskInput" />
                    })}
                </ul>
            </div>
        )
    }
}

export default Overview
