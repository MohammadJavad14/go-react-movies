import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Movies from "./components/Movies";
import Home from "./components/Home";
import Admin from "./components/Admin";
import OneMovie from "./components/OneMovie";
import Genres from "./components/Genres";
import OneGenre from "./components/OneGenre";


export default function App() {
  return (
    <Router>
    <div className='container'>
      <div className='row'>
        <h1 className='mt-3'>
          Go Watch a Movie!
        </h1>
        <hr className='mb-3'></hr>
      </div>
         <div className='row'>
          <div className='col-md-2'>
            <nav>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link to="/">Home</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/movies">Movies</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/genres">Genres</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-md-10'>
            <Routes>
              <Route path="/"  element={ <Home />} />
              <Route path="/admin" element={ <Admin />} />
              <Route path="/movies" element={ <Movies />} />
              <Route path="/movies/:id" element={<OneMovie />} />
              <Route path="/genre/:id" element={<OneGenre />} />
              <Route exact path="/genres" element={ <Genres />} />
            </Routes>
          </div>
         </div>
    </div>
    </Router>
  );
}








