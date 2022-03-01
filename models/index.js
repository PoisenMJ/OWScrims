var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
    process.exit(1);
})