import mongoose from "mongoose"

const uri = process.env.URL_CONNECT_MONGO || "mongodb://localhost:27017/class_room";
const connectMongo= async ()=> {
  try {
     mongoose.connect(uri ,{ useNewUrlParser: true, useUnifiedTopology: true}, ()=> console.log("Mongoose is connected"))
  } catch (error) {
    console.log(error)
  }
}
export const dbconnection= mongoose.connection
export default connectMongo