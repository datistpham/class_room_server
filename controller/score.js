import { dbconnection } from "../db/init.js"

const score= (req, res)=> {
    dbconnection.collection("assignment").findOne({idClass: req.body.idClass}, function(err, result) {
        if(err) throw err
        else {
            return res.json({result: result})
        }
    })
}

export default score