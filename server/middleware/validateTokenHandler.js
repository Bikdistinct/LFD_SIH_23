const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async(req, res, next) => {
    let token;
    if(req.cookies.token) {
        token = req.cookies.token;
    }

    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            res.locals.user = decoded.user;
        } catch (error) {
            res.clearCookie('token');
            res.locals.user = undefined;
        }
    } else {
        res.locals.user = undefined;
    }
    next();
});

module.exports = validateToken;