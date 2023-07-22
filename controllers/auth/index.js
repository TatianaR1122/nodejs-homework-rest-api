const { getCurrent } = require('./current');
const { login } = require('./login');
const { logout } = require('./logout');
const { register } = require('./register');
const { updateSubscription } = require('./updateSubscription');
const { updateAvatar } = require('./updateAvatar')
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail')

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};