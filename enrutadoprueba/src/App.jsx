import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    Route,
    Routes,
    Link,
} from "react-router-dom";

function App() {
 const Home = () => Element = <h1>Home</h1>
    const SearchPage = () => Element = <h1>Search Page</h1>

  return (
      <div className="App">
          <header>
              <h1>Meow appp react </h1>
              <nav>
                  <ul>
                      <li>
                          <Link to='/SearchPage'> Search Page </Link>
                      </li>
                  <li><Link to='/'> Home </Link></li>
                  </ul>
              </nav>
          </header>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/SearchPage' element={<SearchPage/>}/>
          </Routes>



      </div>


  )
}

export default App
