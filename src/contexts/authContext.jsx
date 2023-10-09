import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
const authContext = createContext(null);

// hook for use auth context
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const value = useContext(authContext);
  return value;
}
function AuthProvider({ children }) {
  const [loadding, setLoadding] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  useEffect(() => {
    setError(false);
    const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoadding(false);
      } else {
        setUser({});
        setLoadding(true);
      }

      return () => {
        unSubscrib();
      };
    });
  }, [auth]);
  // register user
  const register = (name, email, password) => {
    setError(false);
    setLoadding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => setUser(data.user))
      .catch((err) => setError(err));

    // update profile
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // login
  const login = (email, password) => {
    setError(false);
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // logout
  const logout = () => {
    signOut(auth);
  };
  return (
    <authContext.Provider
      value={{
        register,
        user,
        loadding,
        error,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children && children}
    </authContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.element,
};
export default AuthProvider;
