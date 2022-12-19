import { useState, useEffect } from 'react';
import {onAuthStateChanged , signInWithEmailAndPassword , signOut} from 'firebase/auth';
import app from '../../firebase';

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const auth = app;
  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }

    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };

  const signedInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth,email, password);

    const signedOut = () =>
        signOut(auth).then(clear);
// listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signedInWithEmailAndPassword,
    signedOut
  };
}