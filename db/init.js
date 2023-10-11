import mongoose from "mongoose"

const uri = "mongodb+srv://giang:giang@cluster0.pffyt.mongodb.net/class_room";
const connectMongo= async ()=> {
  try {
    mongoose.connect(uri ,{ useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Connect mongo success")
  } catch (error) {
    console.log(error)
  }
}
export const dbconnection= mongoose.connection
export default connectMongo
