// src/App.js
import React from 'react';
import Counter from './components/counter';
import './styles.css'; // Optional: Import your CSS file for styling

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Interactive Counter App</h1>
            <Counter />
        </div>
    );
};

export default App;