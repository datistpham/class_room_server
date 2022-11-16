import { dbconnection } from "../db/init.js"

const get_class= (req, res)=> {
    dbconnection.collection("class").findOne({classId: req.body.classId}, function(err, result) {
        if(err) throw err
        else {
            return res.json({result})
        }
    })
}

export default get_class