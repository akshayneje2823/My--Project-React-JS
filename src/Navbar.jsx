import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="#">MY Projects</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">TextUtils</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
