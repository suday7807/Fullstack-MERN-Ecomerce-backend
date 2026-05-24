import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "eKart" });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

export default connectDb;
