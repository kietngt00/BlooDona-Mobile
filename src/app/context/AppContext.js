import React, { useState } from "react"

const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export {AppContext}
export default AppContextProvider