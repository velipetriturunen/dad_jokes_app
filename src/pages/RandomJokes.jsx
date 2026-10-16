import { useState, useEffect } from 'react';


function RandomJokes() {

    const [joke, setJoke] = useState("");

    const getJoke = async () => {
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
    };


    return (
        <div>
            <h3>Random Jokes</h3>
            <p>{joke}</p>
            <button onClick={getJoke}>
                Generoi
            </button>
        </div>
    )
}

export default RandomJokes