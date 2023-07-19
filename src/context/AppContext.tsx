import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const AppContext = createContext<SearchContext>({} as SearchContext)


// passing these across components
interface SearchContext {
    location: Location;
    setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

interface Location {
    cityCountry: string;
}

type AppContextProviderProps = {
    children: React.ReactNode
}




export default function AppContextProvider({children}: AppContextProviderProps){

    const [cityCountry, setCityCountry] = useState<Location>({
        cityCountry: ''
    })

    // actual context
    const values={
        location: cityCountry,
        setLocation: setCityCountry
    }


    return(
        <AppContext.Provider value={values}>
            <Outlet/>
            {children}
        </AppContext.Provider>
    )

}