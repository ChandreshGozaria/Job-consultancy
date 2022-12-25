const Post = require('../models/posts');

const createPost = async (postData) => {
    return await Post.create(postData);
};

const getPost = async (clientId) => {
    return await Post.find({clientId});
};

module.exports = {
    createPost,
    getPost,
}