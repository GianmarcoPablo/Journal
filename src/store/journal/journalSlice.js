import { createSlice } from '@reduxjs/toolkit';

const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSave: "",
        notes: [],
        active: {
            id: null,
            title: "",
            body: "",
            date: null,
            imageUrl: [],
        },
    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                } 
                return note;
            })
        },
        deleteNoteById: (state, action) => {

        }
    },
});

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, savingNewNote } = journalSlice.actions;

export default journalSlice.reducer;