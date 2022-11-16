import { dbconnection } from "../db/init.js"

const get_assignment_class= (req, res)=> {
    dbconnection.collection("assignment").find({classId: req.query.classId}).toArray(function(err, result) {
        if(err) throw err
        else {
            return res.json({result: result, count: result.length})
        }
    })
}

export default get_assignment_class