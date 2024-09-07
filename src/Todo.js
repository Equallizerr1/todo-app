import React, { useEffect, useState } from "react";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() !== "") {
			setTodos([...todos, inputValue]);
			setInputValue("");
			localStorage.setItem("todos", JSON.stringify([...todos, inputValue]));
		}
	};

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	});

	return (
		<div>
			<h1>Todo App</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Enter a new Task"></input>
				<button type="submit">Add Task</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;
