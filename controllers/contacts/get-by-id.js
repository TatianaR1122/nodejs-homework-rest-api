// const contacts = require('../../models/contacts');
const { ContactModel } = require('../../database/models');

async function getById(req, res, next) {
  try {
    const { contactId } = req.params;
    // const result = await contacts.getById(contactId);
    const result = await ContactModel.findById(contactId).catch(error => {
      const err = Error(error.message);
      err.code = 400;
      throw err;
    });

    if (!result) {
      return res.status(404).json({
        message: 'Not found',
      });
    }
    // res.status(200).json(result);
    const { _id, ...rest } = result.toObject();

    const mappedContact = {
      id: _id,
      ...rest,
    };

    res.status(200).json(mappedContact);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getById,
};