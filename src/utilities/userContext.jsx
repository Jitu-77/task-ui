import React ,{useContext , createContext, Children} from "react";

const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user,setUser] = React.useState({})
    return( 
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const userDetails = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("No UserContext found! Wrap your app in <UserProvider>.");
  }
  return context;
};



