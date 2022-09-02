import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export default function FetchComponent() {
    const [id, setId] = useState(1);
    const { loading, error, value } = useFetch(
        `${URL}/${id}`,
        {},
        [id]
    )
    
    return (
        <>
            <h2>{id}</h2>
            <button onClick={() => setId(currentId => currentId + 1)}>
                Next ID
            </button>
            {(id <= 0) && <button onClick={() => setId(currentId => currentId - 1)}>
                Previous ID
            </button>}
            <br/>
            <p> Loading: {loading.toString()}</p>
            <p> {JSON.stringify(error, null, 2)} </p>
            <p> {JSON.stringify(value, null, 2)} </p>
        </>
    )


}