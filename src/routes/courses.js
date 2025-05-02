const express = require('express');
const router = express.Router();
const { getCourseInfo } = require('../controllers/courseController');

router.get('/course/:year/:term/:department/:courseNumber/:section', getCourseInfo);

module.exports = router;