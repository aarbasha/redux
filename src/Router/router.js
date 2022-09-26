import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../Components/Home'
import About from "../Components/About"
import Counter from '../Components/Counter'
const Router = () => {
    const ele = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/counter",
            element: <Counter />
        }
    ])

    return ele
}

export default Router