import './App.css'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandomJokes from './pages/RandomJokes.jsx'
import CreateJokes from './pages/CreateJokes.jsx'
import JokesList from './pages/JokesList.jsx'
import { useState } from 'react'

function App() {


    const [page, setPage] = useState("")


    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <NavBar />
            </div>

            <Routes>
                <Route path="/" element={<RandomJokes />} />
                <Route path="/create" element={<CreateJokes />} />
                <Route path="/list" element={<JokesList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
