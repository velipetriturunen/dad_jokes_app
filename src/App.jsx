import './App.css'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandomJokes from './pages/RandomJokes.jsx'
import CreateJokes from './pages/CreateJokes.jsx'
import JokesList from './pages/JokesList.jsx'
import { useState } from 'react'
import { ToastContainer, toast} from 'react-toastify'

function App() {
    const [jokesArray, setJokesArray] = useState([])

    //Add a joke to a list
    function addJoke(joke) {
        setJokesArray((currentJokes) => [
            ...currentJokes, joke
        ])
    }

    //clear the list
    function clearList() {
        setJokesArray([]);
    }
    
    //Toast Warnings
    const toastWarning = (text) => {
        toast.warn(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    //Toast Errors
    const toastError = (text) => {
        toast.error(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }



    return (
        <BrowserRouter>
            <div className="header">
                <Header />
                <NavBar />
            </div>

            <Routes>
                <Route path="/" element={<RandomJokes onSaveJoke={addJoke} toastWarning={toastWarning}/>} />
                <Route path="/create" element={<CreateJokes onSaveJoke={addJoke} toastError={toastError}/>} />
                <Route path="/list" element={<JokesList jokes={jokesArray} clearList={clearList} toastError={toastError}/>} />
            </Routes>

            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App
