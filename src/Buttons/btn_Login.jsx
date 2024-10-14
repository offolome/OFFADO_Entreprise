import React, { useState } from "react";
import personneData from "../Data/personne";

const LoginBtn = () => {
    const [personne, setPersonne] = useState(personneData);
    const [show, setShow] = useState(true);

    const handleSubmit = () => {
        setShow(!show)
    }

    return (
        <>
            <div className="nav-btn">
                <button className="btn" onClick={handleSubmit}>Connexion</button>
            </div>
            <div>
                {show && (<div>
                    <img src={personne.imgSrc} alt="photo" />
                    <p>{personne.fullName}</p>
                    <p>{personne.bio}</p>
                    <p>{personne.profession}</p>
                </div>)}
            </div>
        </>
    );
}

export default LoginBtn;