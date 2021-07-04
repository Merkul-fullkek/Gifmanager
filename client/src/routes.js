import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GifsPage } from './pages/GifsPage';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/gifs">
                    <GifsPage />
                </Route>
                <Route path="/upload" >
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact >
                <AuthPage />
            </Route>
            <Redirect to ="/" />
        </Switch>
    );
}