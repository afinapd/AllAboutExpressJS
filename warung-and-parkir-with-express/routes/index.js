const express = require('express');
const router = express.Router();

const parkirRoutes = require('./parkir.route');
const warungRoutes = require('./warung.route');

router.use('/parkir', parkirRoutes);
router.use('/warung', warungRoutes);
router.use((req, res, next) => {
    res.status(404);
    res.send('Unknown page');
});

module.exports = router;