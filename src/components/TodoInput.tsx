import React, { useState } from 'react';
import { Todo } from '../models/Todo';
import { v4 as uuid } from 'uuid';
import { Button, Form } from "react-bootstrap";

interface TodoInputProps {
    addTodo: Function,
}

const TodoInput = ({ addTodo }: TodoInputProps) => {
    const [input, setInput] = useState("");

    const add = () => {
        if (input.trim() !== "") {
            const todo: Todo = { id: uuid(), title: input};
            addTodo(todo);
            setInput("");

        }
    }
    
    return (
        <Form className="mt-5">
            <Form.Group>
                <Form.Label>Insert your ToDo</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Insert text here" 
                    onChange={(e: any) => setInput(e.target.value)} 
                    value={input}
                />
            </Form.Group>
            <Button 
                variant="primary" 
                onClick={() => add()}
            >Add</Button>
        </Form>
    )
}

TodoInput.propTypes = {
    addTodo: () => {},
}

export default TodoInput;
