import React from 'react'
// import { useSearchParams } from 'react-router-dom'

// const Header = React.lazy(()=> import('./Components/Header/Header'))
const Graph = React.lazy(() => import('./View/Dashboard/Graph'))
const Orders = React.lazy(() => import('./View/Orders/Orders'))
const Bids = React.lazy(() => import('./View//Bids/Bids'))
const Positions = React.lazy(() => import('./View/Positions/Positions'))
const Funds = React.lazy(() => import('./View/Funds/Funds'))
const Holding = React.lazy(()=> import('./View/Holding/Holding'))

const routes = [
    { path: '/', exact: true, name: 'Home' },
    // {path:`/Trade/:name?`, name:'Dashboard', element: Header},
    { path: `/Trade/:name?` , name: 'Dashboard', element: Graph, exact: true,  },
    { path: '/Orders', name: 'Orders', element: Orders, exact: true },
    { path: '/Bids', name: 'Bids', element: Bids, exact: true },
    { path: '/Positions', name: 'Positions', element: Positions, exact: true },
    { path: '/Funds', name: 'Funds', element: Funds, exact: true },
    { path: '/Holding', name: 'Holding', element: Holding, exact: true },
]

export default routes