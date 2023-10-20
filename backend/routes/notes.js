const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');

const fetchuser = require('../middleware/fetchuser');

const { body, validationResult } = require('express-validator');

//Rout/Endpoint 1 = Get all the notes using: GET "api/notes/fetchallnotes". login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {


    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured")
    }
})

//Rout/Endpoint 2= Add a note using: POST "api/notes/addanote" .login required
router.post('/addanote', fetchuser, [
    body("title", "Enter valid title").isLength({ min: 3 }),
    body("description", "Description must not be less than 6 chars").isLength({ min: 6 })
], async (req, res) => {


    try {
        const { title, description, tags } = req.body;  ///destructuring
        //if there are errors, return baad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tags, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error occured")
    }



})

module.exports = router;