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

            {/* Pieds de page */}
            {/* <footer>
                <div id="Social">
                    <h5>Réseaux sociaux</h5>
                    <a href="#facebook">Facebook</a>
                    <a href="#instagram">Instagram</a>
                    <a href="#tweeter">Tweeter</a>
                    <a href="#gmail">Gmail</a>
                    <a href="#linkedln">Linkedln</a>
                </div>
                <div className="services_informations">
                    <h5>Nos services</h5>
                    <a href="#create_app">Création d'application web et mobile</a>
                    <a href="#maintenance_web">Maintenance de site web</a>
                    <a href="#maintenance_bd">Maintenance de base de données</a>
                    <a href="#maintenance_info">Maintenance de parc informatique</a>
                </div>
                <div className="informations">
                    <h5>Informations</h5>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                    <a href="#propos">A propos</a>
                </div>
            </footer> */}
        </div>
    );
}

export default Header;