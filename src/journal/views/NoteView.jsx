import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import useForm from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"

export default function NoteView() {

    const { active: note } = useSelector(state => state.journal)
    const dispatch = useDispatch()

    const { body, title, onInputChange, formState, date } = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString()
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    return (
        <>
            <Grid container direction={"row"} justifyContent={"space-between"} sx={{ mb: 1 }}>
                <Grid item>
                    <Typography fontSize={39} fontWeight={"light"}>{dateString}</Typography>
                </Grid>

                <Grid item>
                    <Button
                        onClick={onSaveNote}
                        color="primary" sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid>
                <Grid container>
                    <TextField
                        name="title"
                        value={title}
                        onChange={onInputChange}
                        type="text" variant="filled" fullWidth placeholder="Ingrese un titulo" sx={{ border: "none", mb: 1 }} />
                    <TextField
                        name="body"
                        value={body}
                        onChange={onInputChange}
                        type="text" variant="filled" fullWidth multiline placeholder="¿Que sucedio el dia de hoy?" minRows={5} />
                </Grid>
            </Grid>
            <Grid container>
                <ImageGallery />
            </Grid>
        </>
    )
}
