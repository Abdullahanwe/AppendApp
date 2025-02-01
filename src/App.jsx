import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio'
import Team from './Components/Team/Team'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import Price from './Components/Price/Price'

let router =createBrowserRouter([
  {path:'',element:<Layout/>, children:[
    {index:true ,element:<Home/>},
    {path:'about' ,element:<About/>},
    {path:'services' ,element:<Services/>},
    {path:'portfolio' ,element:<Portfolio/>},
    {path:'price' ,element:<Price/>},
    {path:'team' ,element:<Team/>},
    {path:'blog' ,element:<Blog/>},
    {path:'contact' ,element:<Contact/>},
    {path:'*' ,element:<NotFound/>}
  ]}
])

function App() {

  return <RouterProvider router={router}>
     
  </RouterProvider>
}

export default App;
