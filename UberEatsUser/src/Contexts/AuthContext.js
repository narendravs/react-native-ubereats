import { createContext, useState, useEffect, useContext } from "react";
import { Auth,DataStore } from "aws-amplify";
import {User} from '../models';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const sub = authUser?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);

  useEffect( ()=>{
    DataStore.query(User,(user)=>user.sub.eq(sub)).then((users)=>setDbUser(users[0]));
  },[sub]);
  
  console.log("authuser..........");
  console.log(authUser);
  console.log(dbUser);

  return (
    <AuthContext.Provider value={{authUser, dbUser, sub,setDbUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
