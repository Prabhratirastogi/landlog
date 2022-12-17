// import { createContext, useContext, Context } from 'react'
// import useFirebaseAuth from '../lib/useFirebaseAuth';

// const authUserContext = createContext({
//   authUser: null,
//   loading: true, 
//   signInWithEmailAndPassword: async (email,password) => {},
//   createUserWithEmailAndPassword: async () => {},
//   signOut: async () => {}
// });

// export function AuthUserProvider({ children }) {
//   const auth = useFirebaseAuth();
//   return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
// }
// // custom hook to use the authUserContext and access authUser and loading
// export const useAuth = () => useContext(authUserContext);