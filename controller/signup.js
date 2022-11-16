import { v4 } from "uuid"
import { dbconnection } from "../db/init.js"

const signup= (req, res)=> {
    dbconnection.collection("user").insertOne({account: req.body.account, password: (req.body.password), userId: v4()}, function(err, result) {
        if(err) throw err
        else {
            return res.json({message: "Signup successfully", signup: true})
        }
    })
}

export default signup
