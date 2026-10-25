

function JokesList({jokes, clearList, toastError}) {
    //Mahdollistetaan csv tiedoston lataus
    const downloadCSV = () => {
        //Jos tyhjä lista
        if(jokes.length === 0) {
            toastError("Cannot download an empty list!")
            return
        }
        const csv = jokes.map(joke => `"${String(joke).replace(/"/g, '""')}"`).join("\n");
        const blob = new Blob([csv], {type: "text/csv;charset=utf-8;"})
        const url = URL.createObjectURL(blob)

        const link = document.createElement("a");
        link.href = url;
        link.download = "jokes.csv";
        link.click();

        URL.revokeObjectURL(url);
    }



    return(
        <div>
            <h3>Jokes List</h3>

            <div>
                <button className="buttons" onClick={downloadCSV}>Download as CSV</button>
                <button className="buttons" onClick={clearList}>Clear list</button>
            </div>

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