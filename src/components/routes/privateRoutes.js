import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../stateManagement/UserContext";

const PrivateRoutes = (props) => {
    const { validate } = useContext(UserContext);
    const {exact, path, component:Component} = props
    return (
        <Route 
            exact={exact}
            path={path}
        >
            {validate ? <Component/> :
                <Redirect to='/'/>
            }
        </Route>
    )
}

export default PrivateRoutes;