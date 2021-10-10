//import React from 'react
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoutes from './privateRoutes';
import { views } from './views';

// const isNot = () => (<h1>Esto es privado</h1>)

const MyRoutes = () => {
  const Paths = Object.keys(views)
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      
      {/*<Navegation/>*/}
      {/* El siguiente código renderiza los componentes*/}
      {
        Paths.map( path => { 
          return (
            views[path]['isPublic'] ?
            <Route
              key = {path}
              path = {path}
              component = {views[path]['view']}
              exact
            /> :
            <PrivateRoutes
              key = {path}
              path = {path}
              exact
              component = {views[path]['view']}
            />
            
            
      )})}

    </BrowserRouter>    
)}

export default MyRoutes

