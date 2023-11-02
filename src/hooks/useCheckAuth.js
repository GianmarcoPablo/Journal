import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"

import { login, logout } from "../store/auth/authSlice"
import { startLoadingNotes } from "../store/journal/thunks"
export default function useCheckAuth() {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout())
            const { uid, displayName, email, photoURL } = user
            dispatch(login({ uid, displayName, email, photoURL }))
            dispatch(startLoadingNotes())
        })
    }, [])

    return {
        status
    }
}
