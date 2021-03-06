import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e) {
        var d = new Date()
        if (this._inputElement.value !== "") {
			var newItem = {
				text: this._inputElement.value,
                key: Date.now(),
                time: d.getHours() + ":" + d.getMinutes()
			};
			this.setState(prevState => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
            this._inputElement.value = "";
        }
		e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
                    <h1 className="header-text">My Todo List</h1>
					<form onSubmit={this.addItem}>
						<input
							placeholder="Enter New Task"
							size="40"
							ref={a => (this._inputElement = a)}
						/>
						<button className="add-button" type="submit">
							Add Task
						</button>
					</form>
				</div>
                <TodoList items={this.state.items} delete={this.deleteItem}/>
			</div>
		);
	}
}

export default TodoForm;
