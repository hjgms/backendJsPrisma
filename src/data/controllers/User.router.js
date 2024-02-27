const { Router } = require("express");
const router = Router();

//controllers
const UserController = require('./User.controller');
const controller = new UserController();

//router
router.get('/:id', controller.find);

router.post('/', controller.create);

router.put('/', controller.put);

router.delete('/', controller.delete);

//search
router.get('/', controller.findAll);

module.exports = router;