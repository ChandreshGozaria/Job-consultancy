const Note = require('../models/notes');

const createNote = async (noteData) => {
    return await Note.create(noteData);
};

const getNote = async (id) => {
    return await Note.find(id);
};

module.exports = {
    createNote,
    getNote,
}