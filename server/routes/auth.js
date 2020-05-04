const express = require('express');
const router = express.Router();

// import controller
const { signup } = require('../controllers/auth');

// import validators
const { userSignupValidator } = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);


module.exports = router;
