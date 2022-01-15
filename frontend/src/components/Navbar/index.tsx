import { ReactComponentElement } from "react";
import Logo from 'assets/img/Logo.png'
import "./styles.css"

function Navbar(){
    return(


<header>
    <nav className="container">
        <div className="movie-nav-content">
            <a href="/">
                <img src={Logo}  alt="fireSpot"/>
            </a>
            
            <a href="https://github.com/antonioarjpi" target="_blank" rel="noreferrer">
                <div className="movie-contact-container">
                    <i className="fa fa-github"></i>
                    <p className="movie-contact-link">/antonioarjpi</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    
    
    
    )
}

export default Navbar;
