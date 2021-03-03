import React from 'react';

import ItemDetails, {Record} from '../item-details'
import {withSwapiService} from '../hoc-helpers'

const PlanetDetails = (props) => {
    return(
        <ItemDetails {... props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="RotationPeriod" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    )
}

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(PlanetDetails, mapMethodToProps);