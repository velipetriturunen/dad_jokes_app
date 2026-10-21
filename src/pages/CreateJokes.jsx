import { useState } from 'react';

function CreateJokes({onSaveJoke}) {
    const [joke, setJoke] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!joke.trim()) return;

        onSaveJoke(joke)
        setJoke("");
    }


    return (

        <div>
            <h3>Create Jokes</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={joke} onChange={(e) => setJoke(e.target.value)} placeholder="Write a joke"></input>

                <button type="submit">Add</button>
            </form>
            
            
                
            
        </div>

    )
}

export default CreateJokes