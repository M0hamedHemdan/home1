import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import { Children } from 'react'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Ndfont from './components/Ndfont/Ndfont.jsx'






function App() {
  
  const hambozo = createBrowserRouter([
    { path: "" ,
      element: <Layout/> ,
      children:[
      { index:true , element:<Home/>},
      { path:"about" , element:<About/>},
      { path:"contact" , element:<Contact/>},
      { path:"portfolio" , element:<Portfolio/>},
      { path:"*" , element:<Ndfont/>},
  
  
    ] }
  ])
  
  return (
    <>
      <RouterProvider router={hambozo}>

      </RouterProvider>
      
    </>
  )
}

export default App
