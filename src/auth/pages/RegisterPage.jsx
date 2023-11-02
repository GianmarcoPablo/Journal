import { useMemo, useState } from "react"
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as LinkRouter } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"
import "animate.css"

const formData = {
    displayName: "",
    email: "",
    password: ""
}

const fromValidations = {
    email: [(value) => value.includes("@"), "El correo debe ser valido"],
    password: [(value) => value.length >= 6, "La contraseña debe tener al menos 6 caracteres"],
    displayName: [(value) => value.length >= 1, "El nombre es obligatorio"]
}

export default function RegisterPage() {

    const { errorMessage, status } = useSelector(state => state.auth)

    const isCheckingAuthentication = useMemo(() => status === "checking", [status])

    const [formSubmitted, setFormSubmitted] = useState(false)

    const dispatch = useDispatch()

    const { displayName, email, password, onInputChange, emailValid, passwordValid, displayNameValid, isFormValid, formState } = useForm(formData, fromValidations)


    const onSubmit = e => {
        e.preventDefault()
        setFormSubmitted(true)
        if (!isFormValid) return
        dispatch(startCreatingUserWithEmailAndPassword(formState))
    }

    return (
        <AuthLayout title="Crear Cuenta">
            <h1> FormValid {isFormValid ? "valido" : "incorrecto"} </h1>
            <form
                className="animate__animated animate__fadeIn animate__faster"
                onSubmit={onSubmit}>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            type="text"
                            placeholder="Nombre Completo"
                            name="displayName"
                            onChange={onInputChange}
                            value={displayName}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="correo"
                            type="email"
                            placeholder="correo@google.com"
                            name="email"
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            value={email}
                            helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            error={!!passwordValid && formSubmitted}
                            onChange={onInputChange}
                            value={password}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? "block" : "none"}
                        >
                            <Alert
                                severity="error"
                            >
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} >
                            <Button
                                disabled={isCheckingAuthentication}
                                type="submit" variant="contained" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction={"row"} justifyContent={"end"}>
                        <Typography
                            sx={{ mr: 1 }}
                        >
                            ¿Ya tienes una cuenta?
                        </Typography>
                        <Link
                            component={LinkRouter}
                            to="/auth/login"
                            color={"inherit"}
                        >
                            Iniciar Sesión
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
