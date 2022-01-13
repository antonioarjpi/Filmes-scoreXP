import { ReactComponentElement } from "react";
import "./styles.css"

function Navbar(){
    return(


<header>
    <nav className="container">
        <div className="movie-nav-content">
            <h1>Filmes ScoreXP</h1>
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
