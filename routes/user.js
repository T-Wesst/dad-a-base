const router = require('express').Router();
const { login, signup, logout, visitor, cookieCheck } = require('../controllers/user');


router.get('/visitor', visitor);
router.get('/authorized', cookieCheck);
router.post('/login', login);
router.get('/logout', logout);
router.post('/signup', signup);

module.exports = router;
