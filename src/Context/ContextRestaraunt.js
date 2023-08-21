import { createContext, useState } from "react";

const ResContext = createContext()


export const ResContextProvider = ({ children }) => {

    const [addBasket, setAddBasket] = useState([])
    data={
        addBasket,
        setAddBasket
    }
    return (
        <ResContext.Provider value={data}>

            {children}
        </ResContext.Provider>
    )
}


export default ResContext