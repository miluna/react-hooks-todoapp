import React from 'react';
import { Todo } from '../models/Todo';
import { Button, Card, Row } from 'react-bootstrap';

interface TodoItemProps {
    todo: Todo,
    deleteTodo: Function,
}

const TodoItem = ({ todo, deleteTodo }: TodoItemProps) => {
    return (
        <Card className="m-2 w-50">
            <Card.Body>
                <Row className="d-flex justify-content-between">
                    <Card.Title>{todo.title || "ToDo"}</Card.Title>
                    <Button variant="secondary" onClick={() => deleteTodo(todo)}>Delete</Button>
                </Row>
            </Card.Body>
        </Card>
    )
}

TodoItem.defaultProps = {
    todo: {},
    deleteTodo: () => {},
}

export default TodoItem;
