const adminService = require("../services/admin");

const createAdmin = async (req, res) => {
    try {
        const admin = await adminService.createAdmin(req.body);
        res.status(200).send({ data: admin, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAdminById = async (req, res) => {
    try {
        const admin = await adminService.getAdmin(req.params.adminId);
        res.status(200).send({ data: admin, status: "success" });
    } catch (err) {
        
        res.status(500).json({ error: err.message });
    }
};

const updateAdmin = async (req, res) => {
    try {
        console.log('req.params', req.params);
        const admin = await adminService.updateAdmin(req.params.adminId, req.body);
        console.log('admin', admin)
        res.status(201).send({ data: admin, status: "success" });
    } catch (err) {
        console.log(' Error: ', err.message );
        res.status(500).json({ error: err.message });
    }
};



module.exports = {
    createAdmin,
    getAdminById,
    updateAdmin,
}