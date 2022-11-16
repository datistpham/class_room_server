import { dbconnection } from "../db/init.js"

const index= (req, res)=> {
    dbconnection.collection("user").findOne({userId: req.body.userId}, function(err, result) {
        if(err) throw err
        else {
            return res.json({result})
        }
    })
}

export default index