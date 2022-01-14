import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { productLogout } from './product';
import { finishLoading, startLoading } from './ui';


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading())

        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(finishLoading())
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
                dispatch(finishLoading())
            })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                //await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch(err => {
                console.log(err);
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName, user.photoURL)
                )
                console.log(user);
            })

    }
}

export const login = (uid, displayName, photoURL) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            photoURL
        }
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        const auth = getAuth()
        await signOut(auth)
        dispatch(logout())
        dispatch(productLogout());
    }
}

export const logout = () => ({
    type: types.logout
})