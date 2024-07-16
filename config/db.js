// mongoose  is use to connect the the application to the database
// that is the mongo db
// i have to install mongoose and import it
//you create async await function

import mongoose from "mongoose";

const connecteDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    const connectionState = connection.connection.readyState;

    if (connectionState === 0) {
      console.log("Disconnected");
      return;
    }
    if (connectionState === 1) {
      console.log("MongoDB connected");
      return;
    }
  } catch (error) {
    console.log("Error connecting", error);
  }
};

export default connecteDb;
