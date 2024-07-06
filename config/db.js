// mongoose  his used to connect the the application to the database
// that is the mongo db
// i have to install mongoose and import it
//you create async await function

import mongoose from "mongoose";

let connected = false;

const connecteDb = async () => {
  if (connected) {
    console.log("mongodb already connected ...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting", error);
  }
};

export default connecteDb;
