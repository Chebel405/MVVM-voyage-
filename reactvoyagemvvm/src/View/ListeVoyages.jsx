import React, { Fragment } from 'react'

const ListeVoyages = (props) => {
    return (
        <Fragment>
            <h3> Visites </h3>
            <form onSubmit={props.ajouterVisite}>
                <div>
                    <label htmlFor='titre'></label>
                    <input id="lieu"
                        type="text"
                        name="lieu"
                        placeholder="Veuillez ajouter la ville"
                    />
                    <input id="date"
                        type="date"
                        name="date"
                    />
                    <input id="nbVoyageur"
                        type="number"
                        name="nbVoyageur"
                    />

                </div>
                <button type='submit' onClick={handleClick}>Ajouter</button>
            </form>

            <h3> Liste des voyages </h3>
            {props.ListeVoyages && props.ListeVoyages.map((voyage, index) => {
                return <li key={index}>
                    <div>
                        <span>{voyage}</span>

                    </div>
                </li>
            })}
        </Fragment>
    )
}

export default ListeVoyages