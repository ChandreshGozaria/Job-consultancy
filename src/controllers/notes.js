const noteService = require("../services/notes");
const postService = require("../services/posts");
const userService = require("../services/users");
const jwt = require('jsonwebtoken');

// Create Note
const createNote = async (req, res) => {
    try {

        const token = req.header(process.env.TOKEN_HEADER_KEY);
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified.role === 'Recruiter' || verified.role === 'recruiter') {
            
            const postId = await postService.getPost({_id: req.params.postId});
    
            if (postId.length === 0) {
                return res.status(404).send("Post not found.");
            }
            const user = await userService.getrecruiter();

            if (!user) {
                return res.status(404).send("User not found.");
            }
            const noteData = req.body;
            noteData.postId = req.params.postId
            noteData.clientId = verified.id
            noteData.recruiterId = user[0]._id
            const note = await noteService.createNote(noteData);
            res.status(200).send({ data: note, status: "success" });
        } else {
            // Access Denied
            return res.status(401).send("You don't have permission for add new note");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get note
const getAllNote = async (req, res) => {
    try {
        const token = req.header(process.env.TOKEN_HEADER_KEY);
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified.role === 'Client' || verified.role === 'client') {

            const note = await noteService.getNote({clientId:verified.id});
            if (!note) {
                return res.status(404).send("Note not found.");
            }
            res.status(200).send({ data: note, status: "success" });
        } else {
            return res.status(403).send("You don't have permission.");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createNote,
    getAllNote
}