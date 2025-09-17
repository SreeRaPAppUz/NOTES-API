const notes = require('../models/notes.model')
let currentId = 1;

const getNotes = (req, res) => {
    try {
        if (notes.length === 0) {
            return res.status(200).json({
                message: "No notes found! Start by creating a new note using POST /notes.",
                sample_format: {
                    title: "Your note title here",
                    content: "Your note content here"
                },
                notes: []
            });
        }
        res.status(200).json({ notes });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong", details: error.message });
    }
}



const getNote = (req, res) => {
    try {
        const { id } = req.params;
        const note = notes.find(note => note.id == id);
        if (note) {
            res.status(200).json(note);
        } else {
            res.status(404).json({ error: "Note not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Something went wrong", details: error.message });
    }
}

const createNote = (req, res) => {
    try {
        const { title, content } = req.body;
        const note = { id: currentId++, title, content };
        notes.push(note);
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: "Failed to create note", details: error.message });
    }
}

const updateNote = (req, res) => {
    try {
        const { id } = req.params;
        const note = notes.find(note => note.id == id);

        if (note) {
            const { title, content } = req.body;
            if (title !== undefined) note.title = title;
            if (content !== undefined) note.content = content;

            res.status(200).json({ message: "Note updated", note });
        } else {
            res.status(404).json({ error: "Note not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update note", details: error.message });
    }
}

const deleteNote = (req, res) => {
    try {
        const { id } = req.params;
        const index = notes.findIndex(note => note.id == id);

        if (index !== -1) {
            notes.splice(index, 1);
            res.status(200).json({ message: "Note deleted" });
        } else {
            res.status(404).json({ error: "Note not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete note", details: error.message });
    }
}

module.exports = { getNotes, getNote, createNote, updateNote, deleteNote }
