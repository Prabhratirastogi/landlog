// import {app,Firebase} from "../../firebase";
// import {getAuth,signInWithEmailAndPassword} from  "firebase/auth"
// import {useState,useEffect} from 'react';

// const formatAuthUser = (user) => ({
//     email: user.email,
//     password : user.password
// })

// export default function useFirebaseAuth() {
//     const [authUser, setAuthUser] = useState(null);
//     const [loading, setLoading] = useState(true);
  
//     const clear = () => {
//         setAuthUser(null);
//         setLoading(true);
//     };

//     const authStateChanged = async (authState) => {
//       if (!authState) {
//         setAuthUser(null)
//         setLoading(false)
//         return;
//       }
  
//       setLoading(true)
//       var formattedUser = formatAuthUser(authState);
//       setAuthUser(formattedUser);    
//       setLoading(false);
//     };

//     const auth = getAuth();
//     const signInWithEmailAndPassword = (email, password) =>
//        signInWithEmailAndPassword(auth,email, password);

//     const createUserWithEmailAndPassword = (email, password) =>
//         Firebase.createUserWithEmailAndPassword(email, password);

//     const signOut = () =>
//         Firebase.signOut().then(clear);

//   // listen for Firebase state change
//     useEffect(() => {
//       const unsubscribe = app.onAuthStateChanged(authStateChanged);
//       return () => unsubscribe();
//     }, []);
  
//     return {
//       authUser,
//       loading,
//       signInWithEmailAndPassword,
//       createUserWithEmailAndPassword,
//       signOut
//     };
//   }