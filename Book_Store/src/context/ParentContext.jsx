import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ParentContext = ({children}) => {
    const [search, setSearch] = useState('')
  return (
    <AppContext.Provider value={{search, setSearch}}>
        {children}
    </AppContext.Provider>
  )
}

export default ParentContext
