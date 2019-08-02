import React, {useEffect, useState} from 'react';
import {Todo} from "../models/Todo";

interface ReactiveComponentProps {
    todos: Todo[],
}

const ReactiveComponent = ({ todos }: ReactiveComponentProps) => {
    const [randomNumber, setNumber] = useState(Math.random());

    useEffect(() => {
        setNumber(Math.random());
    }, [todos.length]);

    return (
        <div>
            <h1>Random Number</h1>
            <h2>{randomNumber}</h2>
        </div>
    );
};

ReactiveComponent.propTypes = {
    todos: [],
};

export default ReactiveComponent;