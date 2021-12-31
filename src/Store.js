import React, { useState, Component, useContext, createContext } from "react"
export const StoreContext = createContext(null)


export default ({ children }) => {
    const [page, setPage] = useState()
    const store = {
        page: [page, setPage]
    }

    return (
    <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
    )
    
}