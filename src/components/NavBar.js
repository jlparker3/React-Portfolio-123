import React from 'react'


function NavBar() {
    //Routing to component page 
    return (
 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Portfolio">Portfolio</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar
