import ProfileView from "../views/ProfileView";
//import Home from "../views/home/Home";



const a = (props) => {
  console.log(props);
  return(
    <h1>Esto es a</h1>
  )}
  
const b = () => (
<h1>Esto es b</h1>
)

const blog = () => (
<h1>Esto es un blog con muchas entradas</h1>
)

const lista = () => (
  <h1>Esto es una lista</h1>
)
  

const isPublicFalse = true

export const views = {
    //'/': {view: Home, name: 'Home', isPublic: true},
    '/profileview': {view: ProfileView, name: 'ProfileView', isPublic: isPublicFalse},
    '/ancianato': {view: ProfileView, name: 'ProfileView', isPublic: true},
    '/a': {view: a, name: 'A', isPublic: true},    
    '/b': {view: b, name: 'B', isPublic: true},
    '/blog': {view: blog, name: 'blog', isPublic: true},   
    '/lista': {view: blog, name: 'lista', isPublic: true},   
}