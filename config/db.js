const mongoose = require('mongoose');

exports.connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongeDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
