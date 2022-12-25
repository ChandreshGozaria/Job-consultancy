const userService = require("../services/users");
const jwt = require('jsonwebtoken');

// Login
const loginUser = async (req, res) => {
    try {

        console.log('req.body', req.body.email)
        const user = await userService.loginUser(req.body.email, req.body.password);
        console.log('user', user);
        if (user) {

            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let data = {
                time: Date(),
                role: user.role,
                id: user._id
            }

            const token = jwt.sign(data, jwtSecretKey);
            res.status(200).send({ data: user, token, status: "success" });
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create User
const createUser = async (req, res) => {
    try {

        const token = req.header(process.env.TOKEN_HEADER_KEY);

        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log('verified ----------------', verified);
        if (verified.role === 'Admin' || verified.role === 'admin') {
            if (req.body.role === 'client' || req.body.role === 'Client' || req.body.role === 'recruiter' || req.body.role === 'Recruiter') {
                const user = await userService.createUser(req.body);
                res.status(200).send({ data: user, status: "success" });
            } else {
                return res.status(403).send("User role not valid.")
            }
        } else {
            // Access Denied
            return res.status(401).send("You don't have permission for add new user");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get user
const getUserById = async (req, res) => {
    try {
        const token = req.header(process.env.TOKEN_HEADER_KEY);
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified.role === 'Admin' || verified.role === 'admin') {

            const user = await userService.getUser(req.params.userId);
            res.status(200).send({ data: user, status: "success" });
        } else {

            if (verified.id == req.params.userId) {
                const user = await userService.getUser(verified.id);
                res.status(200).send({ data: user, status: "success" });
            } else {
                return res.status(403).send("You don't have permission.");
            }
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {

        const token = req.header(process.env.TOKEN_HEADER_KEY);
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified.role === 'Admin' || verified.role === 'admin') {

            const user = await userService.updateUser(req.params.userId, req.body);
            res.status(201).send({ data: user, status: "success" });
        } else {

            if (verified.id == req.params.userId) {
                const user = await userService.updateUser(verified.id, req.body);
                res.status(201).send({ data: user, status: "success" });
            } else {
                return res.status(403).send("You don't have permission for any change.");
            }
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const token = req.header(process.env.TOKEN_HEADER_KEY);
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (verified.role === 'Admin' || verified.role === 'admin') {

            console.log('------------------------------------- 001', req.params.userId);
            const getUser = await userService.getUser(req.params.userId);
            console.log('getUser ----------------------------- 002', getUser.role);
            if (getUser.role === "Admin" || getUser.role === "admin") {
               
                return res.status(403).send("You don't have permission for delete the role");
            } else {
                console.log(' -------------------------------- 003', getUser.role)
                const user = await userService.deleteUser(req.params.userId);
                console.log(' -------------------------------- 004', user)
                return res.json({ data: user, status: "success" });
            }
        } else {
            return res.status(403).send("You don't have permission for delete the role");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



module.exports = {
    loginUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}