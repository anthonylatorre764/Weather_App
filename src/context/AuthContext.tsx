import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";


// 1. Create Context Instance (establish shape)

interface UserContext {
    userName: UserName;
    setUserName: React.Dispatch<React.SetStateAction<UserName>>;
}

interface UserName {
    firstName: string;
}

export const AuthContext = createContext<UserContext>({} as UserContext)





// 2. Create Context Provider (functional part)

type AuthContextProviderProps = {
    children: React.ReactNode
}


export default function AuthContextProvider({children}: AuthContextProviderProps){

    const [firstName, setFirstName] = useState<UserName>({
        firstName: ''
    })

    const values={
        userName: firstName,
        setUserName: setFirstName
    }


    return(
        <AuthContext.Provider value={values}>
            {children}
            <Outlet/>
        </AuthContext.Provider>
    )

}