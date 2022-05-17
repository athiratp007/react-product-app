import React from 'react'
import { Link } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    
    <Link className="navbar-brand" to='/'>PRODUCTS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        
        <Link className="nav-link" to='/'>ProductEntry</Link>
        <Link className="nav-link" to='/search'>SearchProduct</Link>
        <Link className="nav-link disabled" to='view'>ViewAll</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navebar