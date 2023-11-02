import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"

export default function SidebarItem({ note }) {

    const dispathc = useDispatch()

    const onClickNote = () => {
        dispathc(setActiveNote(note))
    }

    const newTitle = useMemo(() => {
        return note.title?.length > 20 ? note.title.slice(0, 20) + "..." : note.title
    }, [note.title])

    return (
        <ListItem key={note.id} disablePadding>
            <ListItemButton
                onClick={onClickNote}
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={note.body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
