const express = require('express');
const { getNotes, getNote, createNote, updateNote, deleteNote } = require('../controllers/notes.controller');
const validateNotes = require('../middlewares/validateNotes');

const router = express.Router();

router.get("/",getNotes)

router.get("/:id",getNote)

router.post("/",validateNotes,createNote)

router.patch("/:id",validateNotes,updateNote);

router.delete("/:id",deleteNote);

module.exports = router;