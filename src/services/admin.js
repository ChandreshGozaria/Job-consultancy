const admin = require('../models/admins');

const createAdmin = async (adminData) => {
    return await admin.create(adminData);
};
const getAdmin = async (id) => {
    return await admin.findById(id);
};

const updateAdmin = async (id, adminData) => {
    return await admin.findByIdAndUpdate(id, adminData);
};

module.exports = {
    createAdmin,
    updateAdmin,
    getAdmin,
}