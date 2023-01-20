import dotenv, { config } from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`mongoDb is connected ${connect.connection.host}`);
  } catch (error) {
    console.log(`error while connecting to mongoose DB... ${error}`);
    process.exit(1);
  }
};
export default connectDB;
// module.exports = connectDB;

