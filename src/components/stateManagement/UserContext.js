import { createContext, useState } from "react"

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [ validate,  ] = useState(false)


    const contextApplication = {
        validate,
    }

    return(
        <UserContext.Provider
            value={ contextApplication }
        >
            {children}
        </UserContext.Provider>
    )
}

