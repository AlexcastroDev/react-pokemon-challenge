import { lazy } from "react";

export const route = [
    {
        path: "/",
        component: lazy(() => import("../views/Home/index")),
        exact: true,
    },
];
