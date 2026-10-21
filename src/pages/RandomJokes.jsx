import { useState, useEffect } from 'react';

function RandomJokes({onSaveJoke, toastWarning}) {

    const [joke, setJoke] = useState("");

    const getJoke = async () => {
        try {
        const response = await fetch(
            "https://icanhazdadjoke.com/",
            {
                headers: {
                    Accept: "application/json",
                },
            }
        );

        const data = await response.json();

        setJoke(data.joke);
        onSaveJoke(data.joke);
    } catch(error) {
        toastWarning("An Error Has Occured During API Fetch!")
    }
    
    };


    return (
        <div>
            <h3>Random Jokes</h3>
            <p>{joke}</p>
            <button onClick={getJoke}>
                Generate
            </button>
        </div>
    )
}

export default RandomJokes