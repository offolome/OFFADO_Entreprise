import React from "react";

const Header = () => {
    return (
        <div>
            {/* Entête de page */}
            <nav className="menu">
                    <a href="#accueil" className="logo">Offado</a>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <a href="#accueil">Accueil</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#propos">A propos</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-btn">
                        <button className="btn" type="submit">Connexion</button>
                    </div>
                </nav>

        </div>
    );
}

export default Header;