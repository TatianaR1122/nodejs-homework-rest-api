const express = require('express')
const contactController = require('../../controllers/contacts');
const { userAuthMiddleware } = require('../../middlewares');
const { controllerWrapper } = require('../../services');
const router = express.Router();

router.get('/', userAuthMiddleware, controllerWrapper(contactController.getAll));

router.get('/:contactId', userAuthMiddleware, controllerWrapper(contactController.getById));

router.post('/', userAuthMiddleware, controllerWrapper(contactController.addContacts));

router.delete('/:contactId', userAuthMiddleware, controllerWrapper(contactController.deleteById));

router.put('/:contactId', userAuthMiddleware, controllerWrapper(contactController.updateById));

router.patch(
  '/:contactId/favorite',
  userAuthMiddleware,
  controllerWrapper(contactController.updateStatusContact)
);


module.exports = router;
