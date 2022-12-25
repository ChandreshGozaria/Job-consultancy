const User = require('../models/users');

const createUser = async (userData) => {
    return await User.create(userData);
};
const getUser = async (id) => {
    return await User.findById(id);
};

const getrecruiter = async () => {
    return await User.aggregate([{ $match : { role : "recruiter" || "Recruiter" } },{ $sample: { size: 1 } } ])
};

const loginUser =  async (email, password) => {
    return await User.findOne({email, password});
};

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData);
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  };

module.exports = {
    createUser,
    updateUser,
    getUser,
    loginUser,
    deleteUser,
    getrecruiter
}