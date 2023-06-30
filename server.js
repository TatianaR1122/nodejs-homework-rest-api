const app = require('./app');
require('dotenv').config();

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
const { DB_HOST } = process.env
console.log(DB_HOST)
const mongoose = require('mongoose');


mongoose.connect(DB_HOST).then(() => console.log('DB Connected')).catch((error) => console.error(err.message));