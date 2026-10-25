import { useState } from 'react';

function CreateJokes({onSaveJoke, toastError}) {
    const [joke, setJoke] = useState("");

    //Submit handling
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!joke.trim()) {
            toastError("A joke cannot be empty!")
         return;
        }
        onSaveJoke(joke)
        setJoke("");
    }

    return (
        <div>
            <h3>Create Jokes</h3>
            <form onSubmit={handleSubmit}>
                <input id="input" type="text" value={joke} onChange={(e) => setJoke(e.target.value)} placeholder="Write a joke"></input>
                <button className="pageButton" type="submit">Add</button>
            </form>
        </div>
    )
}

export default CreateJokes