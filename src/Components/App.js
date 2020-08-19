import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
    const [todoList, setTodoList] = useState([]);

    // todo를 추가하는 함수
    const addTodo = todo => {
        setTodoList([...todoList, { todo, id: todoList.length }]);
    };

    // todo를 제거하는 함수
    const deleteTodo = id => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <TodoInput addTodo={addTodo}></TodoInput>
            <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
