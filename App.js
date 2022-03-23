import './App.css';
import {  useRoutes,Switch,Route  } from 'react-router-dom';
import Thicc from './Thicc';
import Dog from './Dog';
import Connect from './Connect'
import TokenDetails from './TokenDetails';
import Bitcoin from './Bitcoin';
import Yorker from './Yorker';
import React from 'react'
import Contract from './Contract'

function Router() {
  console.log('token Contract',Contract)
  return useRoutes([
    {
      path:'/',
      element:<Thicc />
    },
    {
      path:'/connect',
      element:<Connect />
    },
    {
      path:'/token',
      element:<TokenDetails/>
    },
    {
      path:'/dog',
      element:<Dog/>
    },
    {
      path:'/bitcoin',
      element:<Bitcoin/>
    },
    {
      path:'/the-yorker',
      element:<Yorker/>
    }
  ])
}

function App() {
  return (
    <div>
   <Router />
   
   </div>
  );
}

export default App;
