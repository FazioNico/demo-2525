
export const getJoke = async () => {
    const url = import.meta.env.VITE_API;
    return await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'authorization': 'Bearer YYYY',
            'method': 'POST'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('2 Joke fetched:', data.value);
            return data.value;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            throw error;
        });
};