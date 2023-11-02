import { IconButton } from "@mui/material"
import JournalLayout from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export default function JournalPage() {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector((state) => state.journal)

  const onclickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {
      /*<Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam sint iure architecto, alias, illo dolorum distinctio reprehenderit incidunt ipsum ullam eveniet omnis odit quas est hic debitis, dolor veniam.
      </Typography>*/}

      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onclickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
