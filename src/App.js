import MyRoutes from "./components/routes/router";
import { UserProvider } from "./components/stateManagement/UserContext";

function App() {
  return (
    <>
      <UserProvider>
      <div>
        <MyRoutes/>
      </div>
      </UserProvider>
    </>
      
  );
}

export default App;