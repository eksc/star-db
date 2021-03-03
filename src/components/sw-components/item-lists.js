import React from 'react'
import ItemList from '../item-list'
import {withData, withChildFunction, withSwapiService} from '../hoc-helpers'

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiSerice) => {
    return {
        getData: swapiSerice.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiSerice) => {
    return {
        getData: swapiSerice.getAllPlanets
    }
};

const mapStarShipMethodsToProps = (swapiSerice) => {
    return {
        getData: swapiSerice.getAllStarShips
    }
};

const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

const StarshiList = withSwapiService(withData(withChildFunction(ItemList, renderModelAndName)), mapStarShipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshiList
}