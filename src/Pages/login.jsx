import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <>
            <div className="login">
                <form action="" className="form-login">
                        <div className="title-login">
                            <h3>Bienvenue à Offado</h3>
                        </div>
                        <div className="username">
                            <input type="text" id="username" className="text-username" placeholder="nom utilisateur" required />
                            <FaUserAlt className="icon-user" size={30} />
                        </div>
                        <div className="password">
                            <input type="password" id="password" className="pwd" placeholder="mot de passe" required />
                            <FaLock className="icon-pwd" size={30} />
                        </div>
                        <p>
                            <a className="forgot-pwd" href="#forgotPassword">Mot de passe oublié</a>
                        </p>

                        <span className="btn-login"><a href="#accueil">se connecter</a></span>

                        <p className="text">Si vous n'avez pas de compte ? <a href="#register">inscrivez-vous</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;