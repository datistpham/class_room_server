import { dbconnection } from "../db/init.js"

const get_assignment= (req, res)=> {
    dbconnection.collection("assignment").findOne({idAssignment: req.query.idAssignment}, function(err, result) {
        if(err) throw err
        else {
            return res.json({result: result})
        }
    })
}

export default get_assignment