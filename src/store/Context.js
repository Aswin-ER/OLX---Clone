import { createContext, useState } from "react";

export const FirebaseContext = createContext('');

export const AuthContext = createContext(null);

export default function Context({children}){
    const [user, setuser] = useState('Helooooooooooooooooooooooo')

    return(
        <AuthContext.Provider value={{user, setuser}}>
            {children}
        </AuthContext.Provider>
    )
}