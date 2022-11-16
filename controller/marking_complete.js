import { dbconnection } from "../db/init.js"

const marking_complete= (req, res)=> {
    dbconnection.collection("assignment").updateOne ({idAssignment: req.body.idAssignment, "attachment.userId" : req.body.userId}, {$set: {"attachment.$.score" :parseInt( req.body.score)}}, false, function(err, result) {
        if(err) throw err
        else {
            return res.json({score: true})
        }
    } )
}   

export default marking_complete