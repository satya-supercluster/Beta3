const { default: mongoose } = require("mongoose");

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("MONGOOSE CONNECTED");
  })
  .catch((e) => {
    console.log(`Not Connencted to MONGOOSE: ${e}`);
  });