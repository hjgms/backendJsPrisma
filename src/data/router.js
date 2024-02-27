const { Router } = require("express");
const router = Router();

//routers
const routerUser = require('./controllers/User.router');
router.use('/user', routerUser);

module.exports = router;