import { dbconnection } from "../db/init.js"

const member_class= (req, res)=> {
    dbconnection.collection("class").findOne({classId: req.query.classId}, function(err, result) {
        if(err) throw err
        else {
            return res.json({result: result})
        }
    })
}

export default member_class