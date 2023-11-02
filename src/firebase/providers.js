import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { FirebaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider()

export async function singInWhiteGoogle() {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const { displayName, email, photoURL, uid } = result.user
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {

        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}


export async function registerUserWithEmailAndPassword({ email, password, displayName }) {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user
        await updateProfile(FirebaseAuth.currentUser, { displayName, photoURL })
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export async function loginWithEmailAndPassword({ email, password }) {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { displayName, photoURL, uid } = resp.user
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}


export async function logoutFirebase() {
    return await FirebaseAuth.signOut()
}