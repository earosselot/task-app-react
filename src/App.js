import React, { Component } from "react"
import Overview from "./components/Overview"
import uniqid from "uniqid"

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            task: {
                text: '',
                id: uniqid(),
            },
            tasks: [],
            tasksAmount: 0,
        }
        this.addTask = this.addTask.bind(this)
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.startEditing = this.startEditing.bind(this)
    }

    onChangeHandle(e) {
        e.preventDefault()
        this.setState(() => {
            return { task: {
                text: e.target.value,
                id: this.state.task.id,
                },
            }
        })
    }

    addTask(e) {
        e.preventDefault()
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(this.state.task),
                task: {
                    text: '',
                    id: uniqid(),
                    editing: false,
                },
                tasksAmount: prevState.tasks.length + 1,
            }
        })
    }

    deleteTask(taskId) {
        let newTasksList = this.state.tasks.filter((value) => value.id !== taskId)
        this.setState(() => {
            return {
                tasks: newTasksList,
                tasksAmount: this.state.tasksAmount - 1,
            }
        })
    }

    startEditing(taskId) {
        let newTaskList = this.state.tasks.map((item) => {
            return (item.id === taskId) ? toggleEdit(item) : item
        })
        function toggleEdit(item) {
            item.editing = true
            return item
        }
        this.setState(() => {
            return {
                tasks: newTaskList
            }
        })
    }

    render() {
        console.log(this.state.tasks)
        return (
            <div className="App">
                <h1>Overview App</h1>
                <form onSubmit={this.addTask}>
                    <label htmlFor="taskInput">Enter task</label>
                    <input
                        value={this.state.task.text}
                        onChange={this.onChangeHandle}
                        type="text"
                        id="taskInput" />
                    <button type="submit">Submit</button>
                </form>
                <Overview
                    tasks={this.state.tasks}
                    onDeleteButton={this.deleteTask}
                    onStartEditing={this.startEditing}
                    onEditingField={this.onChangeHandle}
                    task={this.state.task}
                />
            </div>
        )
    }
}

export default App;
