import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <div>
            <span>{todo.todo}</span>
            <button
                type={"button"}
                onClick={() => {
                    deleteTodo(todo.id);
                }}
            >
                x
            </button>
        </div>
    );
};

export default TodoItem;
