const postService = require("../services/posts");
const userService = require("../services/users");
const jwt = require('jsonwebtoken');



// Create Post
const createPost = async (req, res) => {
    try {

        const token = req.header(process.env.TOKEN_HEADER_KEY);
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified.role === 'client' || verified.role === 'Client') {

            const user = await userService.getrecruiter();

            if (!user) {
                return res.status(404).send("User not found.");
            }
            const postData = req.body;
            postData.clientId = verified.id
            postData.recruiterId = user[0]._id
            const post = await postService.createPost(postData);
            res.status(200).send({ data: post, status: "success" });
        } else {
            // Access Denied
            return res.status(401).send("You don't have permission for add new post");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get post
const getAllPost = async (req, res) => {
    try {
        const token = req.header(process.env.TOKEN_HEADER_KEY);
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified.role === 'Client' || verified.role === 'client') {

            const post = await postService.getPost(verified.id);
            if (!post) {
                return res.status(404).send("Post not found.");
            }
            res.status(200).send({ data: post, status: "success" });
        } else {
            return res.status(403).send("You don't have permission.");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createPost,
    getAllPost
}