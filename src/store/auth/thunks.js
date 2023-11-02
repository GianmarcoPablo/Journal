import { checkingCredentials, logout, login } from "./authSlice"
import { singInWhiteGoogle, registerUserWithEmailAndPassword, loginWithEmailAndPassword, logoutFirebase } from "../../firebase/providers";

const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWhiteGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

const startCreatingUserWithEmailAndPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword({ email, password, displayName });
        if (!ok) return dispatch(logout(errorMessage));
        dispatch(login({ email, displayName, uid, photoURL }));
    }
}

const startLoginWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailAndPassword({
            email,
            password
        });
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}

const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    }
}


export {
    checkingAuthentication,
    startGoogleSignIn,
    startCreatingUserWithEmailAndPassword,
    startLoginWithEmailAndPassword,
    startLogout
}