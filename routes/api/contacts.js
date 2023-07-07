const express = require('express')
const contactController = require('../../controllers/contacts');
const { userAuthMiddleware } = require('../../middlewares');
const { controllerWrapper } = require('../../services');
const router = express.Router();

// router.get('/', contactController.getAll);
router.get('/', userAuthMiddleware, controllerWrapper(contactController.getAll));

// router.get('/:contactId', contactController.getById);
router.get('/:contactId', userAuthMiddleware, controllerWrapper(contactController.getById));

// router.post('/', contactController.addContacts);
router.post('/', userAuthMiddleware, controllerWrapper(contactController.addContacts));

// router.delete('/:contactId', contactController.deleteById);
router.delete('/:contactId', userAuthMiddleware, controllerWrapper(contactController.deleteById));

// router.put('/:contactId', contactController.updateById);
router.put('/:contactId', userAuthMiddleware, controllerWrapper(contactController.updateById));

// router.patch('/:contactId/favorite', contactController.updateStatusContact);
router.patch(
  '/:contactId/favorite',
  userAuthMiddleware,
  controllerWrapper(contactController.updateStatusContact)
);


module.exports = router;
