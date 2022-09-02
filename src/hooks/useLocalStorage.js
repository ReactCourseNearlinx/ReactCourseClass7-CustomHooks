import { useState, useEffect } from 'react';

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}


/** 
 *  Persist state on the local storage by adding the key and value to this hook
 * 
 * @param {string} key
 * @param {string | Function} initialValue
 * 
 */
export default function useLocalStorage(key, initialValue){

    const [value, setValue] = useState(()=>getSavedValue(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}