const express = require('express')
const contactController = require('../../controllers/contacts');
const router = express.Router();

router.get('/', contactController.getAll);

router.get('/:contactId', contactController.getById);

router.post('/', contactController.addContacts);

router.delete('/:contactId', contactController.deleteById);

router.put('/:contactId', contactController.updateById);

module.exports = router;
