import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const PersistedInput = () => {
    const [name, setName] = useLocalStorage('name', '');
    
    return (
        <input 
            type='text' 
            value={name}
            onChange={e=> setName(e.target.value)}
        />
    )
}

export default PersistedInput;