import { useState } from 'react';


function RandomJokes(props) {

    const [joke, setJoke] = useState("");




    return (
        <div>
            <h3>Random Jokes</h3>
            <p>{props.joke}</p>
            <button>Generoi</button>
        </div>
    )
}

export default RandomJokes