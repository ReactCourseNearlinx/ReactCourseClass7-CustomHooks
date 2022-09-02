import useAsync from "./useAsync";

const DEFAULT_OPTIONS = {
    headers: { 'Content-Type': 'application/json'},
};

export default function useFetch(url, options={}, dependencies = []) {
    return useAsync(()=> {
        return fetch(url, { ...DEFAULT_OPTIONS, ...options })
            .then((res) => {
                return res.ok ? res.json() : res.json().then(json => Promise.reject(json)); 
            });
    }, dependencies);
}