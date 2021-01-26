import React, { Suspense } from "react";
import { Switch } from "react-router";
import { route } from "./router";
import { Route } from "react-router-dom";

const Router = () => {
    return (
        <Switch>
            {route.map((route) => (
                <Suspense fallback="...">
                    <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                </Suspense>
            ))}
        </Switch>
    );
};

export default Router;
