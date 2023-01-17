import React, { Fragment } from 'react'
import VoyageListeViewModel from '../viewModel/VoyageListeViewModel'


const VoyageListeModel = () => {

    /**
     * Injection de la logique via notre ViewModel
     */
    const ViewModel = VoyageListeViewModel();

    /**
     * Méthode pour ajouter des visites
     */

    return (
        <Fragment>
            <h3> Voyages </h3>
            <ListeVoyages />
        </Fragment>

    )
}

export default VoyageListeModel