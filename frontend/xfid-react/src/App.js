import React from 'react';
import './App.css';
// import Dropzone from 'react-dropzone';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top fixed-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    About
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">About The Project</a>
                    <a className="dropdown-item" href="#">About Me</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
      <div className="name">
        <p> X<sub>FID</sub></p>
      </div>
      <div className="subtitle">
        <p> An innovative, XRP-based approach to recognizing fraud in the foreign exchange market</p>
      </div>



      {/* <div>
          <Dropzone className='zone' />
        </div> */}
    </div>


  );
}

export default App;
