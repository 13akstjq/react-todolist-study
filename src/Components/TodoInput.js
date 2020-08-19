import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
    const [todo, setTodo] = useState("");

    // input 의 onChange 메소드
    const onChange = e => {
        setTodo(e.target.value);
    };

    // form 의 onSubmit 메소드
    const onSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={todo} onChange={onChange} />
            <button type={"submit"}>+</button>
        </form>
    );
};

export default TodoInput;
