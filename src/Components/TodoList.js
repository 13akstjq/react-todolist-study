import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, deleteTodo }) => {
    return (
        <ul>
            {todoList.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
