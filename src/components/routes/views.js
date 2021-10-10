import ElderlyListPage from "../views/ElderlyListPage";
import EventsListPage from "../views/EventsListPage";
import ProfileView from "../views/ProfileView";
import Register from "../views/Register";
import TestView from "../views/TestView";
import Home from "../views/Home/index";



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

const isPublicFalse = true

export const views = {
    '/': {view: Home, name: 'Home', isPublic: true},
    '/profileview': {view: ProfileView, name: 'ProfileView', isPublic: isPublicFalse},
    '/ancianato': {view: ProfileView, name: 'ProfileView', isPublic: true},
    '/a': {view: a, name: 'A', isPublic: true},    
    '/blog': {view: blog, name: 'blog', isPublic: true},
    '/test': {view: TestView, name: 'lista', isPublic: true},
    '/registro': {view: Register, name: 'registro', isPublic: true},
<<<<<<< HEAD
=======
    '/ancianatos': {view: ElderlyListPage, name: 'lista de ancianatos', isPublic: true},
    '/eventos': {view: EventsListPage, name: 'lista de ancianatos', isPublic: true},
>>>>>>> 7c20fcb6c1568fc440781ae7f67d0a1b9b69acce
}