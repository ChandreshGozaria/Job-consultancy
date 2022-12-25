const User = require('../models/users');

const createUser = async (userData) => {
    return await User.create(userData);
};
const getUser = async (id) => {
    return await User.findById(id);
};

const loginUser =  async (email, password) => {
    console.log('email ---------- ', email);
    console.log('password ---------- ', password);
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
    deleteUser
}