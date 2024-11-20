// src/components/Counter.jsx
import React, { useState } from 'react';
import Button from './button'; // Ensure this import is correct

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Count: {count}</h1>
            <Button label="Increment" onClick={increment} />
            <Button label="Decrement" onClick={decrement} />
        </div>
    );
};

export default Counter;