const Post = require('../models/posts');

const createPost = async (postData) => {
    return await Post.create(postData);
};

const getPost = async (id) => {
    return await Post.find(id);

    // return await Post.aggregate([
    //     { $match: query },
    //     {
    //     $lookup:
    //      {
    //         from: "Note",
    //         localField: "_id",
    //         foreignField: "postId",
    //         as: "data"
    //     }
    // }]);
};

module.exports = {
    createPost,
    getPost,
}