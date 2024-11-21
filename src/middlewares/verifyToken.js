const jwt = require('jsonwebtoken');

// Verify Token middleware
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Get token from Authorization header

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to request
        next(); // Proceed to next middleware
    } catch (error) {
        res.status(400).json({ error: 'Invalid or expired token.' });
    }
};

module.exports = { verifyToken };
