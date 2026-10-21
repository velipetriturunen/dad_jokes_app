import './App.css'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandomJokes from './pages/RandomJokes.jsx'
import CreateJokes from './pages/CreateJokes.jsx'
import JokesList from './pages/JokesList.jsx'
import { useState } from 'react'

function App() {
    const [jokesArray, setJokesArray] = useState([])

    function addJoke(joke) {
        setJokesArray((currentJokes) => [
            ...currentJokes, joke
        ])
    }
    

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <NavBar />
            </div>

            <Routes>
                <Route path="/" element={<RandomJokes onSaveJoke={addJoke}/>} />
                <Route path="/create" element={<CreateJokes onSaveJoke={addJoke}/>} />
                <Route path="/list" element={<JokesList jokes={jokesArray}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
