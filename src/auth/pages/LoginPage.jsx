import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as LinkRouter } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import { useForm } from "../../hooks/index"
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from "react"
import 'animate.css';


const formdata = {
   email: "",
   password: ""
}

export default function LoginPage() {

   const { email, password, onInputChange, onResetForm, formState } = useForm(formdata)
s
   const { status, errorMessage } = useSelector(state => state.auth)
   const dispatch = useDispatch()

   const isAuthenticating = useMemo(() => status === "checking", [status])

   const onSubmit = e => {
      e.preventDefault()
      dispatch(startLoginWithEmailAndPassword({ email, password }))
   }

   const onGoogleSignIn = () => {
      dispatch(startGoogleSignIn())
   }

   return (
      <AuthLayout title="Login" >
         <form onSubmit={onSubmit}
            className="animate__animated animate__fadeIn animate__faster"
         >
            <Grid container>
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
                     value={email}
                     onChange={onInputChange}
                  />
               </Grid>
               <Grid item xs={12} sx={{ mt: 2 }}>
                  <TextField
                     fullWidth
                     label="Contraseña"
                     type="password"
                     placeholder="Contraseña"
                     name="password"
                     value={password}
                     onChange={onInputChange}
                  />
               </Grid>

               <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                  <Grid
                     item
                     xs={12}
                     sm={6}
                     display={!!errorMessage ? "block" : "none"}
                  >
                     <Alert severity="error">
                        {errorMessage}
                     </Alert>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isAuthenticating}
                     >
                        Login
                     </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <Button
                        onClick={onGoogleSignIn}
                        variant="contained"
                        fullWidth
                        disabled={isAuthenticating}
                     >
                        <Google />
                        <Typography sx={{ ml: 1 }}>Google</Typography>
                     </Button>
                  </Grid>
               </Grid>

               <Grid container direction={"row"} justifyContent={"end"}>
                  <Link
                     component={LinkRouter}
                     to="/auth/register">
                     Crear Cuenta
                  </Link>
               </Grid>

            </Grid>
         </form>
      </AuthLayout >


   )
}
