"use strict";
// SaveToken.js
const express = require('express');
const router = express.Router(); // Tạo router thay vì tạo app
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
// Có thể dùng router-level middleware
router.use(cors());
router.use(bodyParser.json());
const SECRET_KEY = "my_secret_key";
// Tạo Token từ dữ liệu
router.post('/Add', (req, res) => {
    const { Name, Email } = req.body;
    if (!Name || !Email) {
        return res.status(400).json({ error: 'Name and Age are required' });
    }
    const token = jwt.sign({ Naame: Name, Email: Email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});
router.get('/GETTOKEN', (req, res) => {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(400).json({ error: 'Thiếu Token!' });
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: "Token hợp lệ!", data: decoded });
    }
    catch (err) {
        res.status(401).json({ error: "Token không hợp lệ hoặc đã hết hạn!" });
    }
});
module.exports = router;
