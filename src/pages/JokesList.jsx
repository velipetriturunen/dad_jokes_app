

function JokesList({jokes}) {

    



    return(
        <div>
            <h3>Jokes List</h3>

            <div>
                <ol>
                    {jokes.map((joke, index) => (
                    <li key={index}>
                        <p>{joke}</p>
                        </li>
                    ))}
                </ol>
            </div>
            
        </div>

    )

}

export default JokesList