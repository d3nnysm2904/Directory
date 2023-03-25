import React, { useState, useEffect } from "react";
import SnackOrBoozeApi from "../middleware/Api";
import Home from "../middleware/Home";
import { Route, Switch } from "react-router-dom";
import Menu from "../middleware/FoodMenu";
import Food from "../middleware/Snacks";
import NotFound from './404';
import Form from "./Form";



const Foods = () =>
{
    const [ isLoading, setIsLoading ] = useState( true );
    const [ snacks, setSnacks ] = useState( [] );
    const [ drinks, setDrinks ] = useState( [] );

    useEffect( () =>
    {
        async function getSnacks ()
        {
            let snacks = await SnackOrBoozeApi.getSnacks();
            setSnacks( snacks );
            setIsLoading( false );
        }

        async function getDrinks ()
        {
            let drinks = await SnackOrBoozeApi.getDrinks();
            setDrinks( drinks );
            setIsLoading( false );
        }
        getDrinks();
        getSnacks();

    }, [] );

    if ( isLoading )
    {
        return <h1>Loading &hellip;</h1>;
    }
    const newFood = ( food ) =>
    {
        food.itemType === "Snack"
            ? setSnacks( ( snacks ) => [ ...snacks, { ...food, id: food.name } ] )
            : setDrinks( ( drinks ) => [ ...drinks, { ...food, id: food.name } ] );
    };
    return (

        <main>
            <Switch>

                <Route exact path="/">
                    <Home snacks={ snacks } drinks={ drinks } />
                </Route>

                <Route exact path="/snacks">
                    <Menu items={ snacks } itemType="snacks" title="Snacks" />
                </Route>

                <Route path="/snacks/:id">
                    <Food items={ snacks } cantFind="/snacks" />
                </Route>

                <Route exact path="/drinks">
                    <Menu items={ drinks } itemType="drinks" title="Drinks" />
                </Route>

                <Route path="/drinks/:id">
                    <Food items={ drinks } cantFind="/drinks" />
                </Route>

                <Route path="/form">
                    <Form newFood={ newFood } />
                </Route>

                <Route >
                    <NotFound />
                </Route>

            </Switch>
        </main>


    );
};

export default Foods;