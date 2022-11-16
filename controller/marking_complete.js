import { dbconnection } from "../db/init.js"

const marking_complete= (req, res)=> {
    dbconnection.collection("assignment").updateOne ({idAssignment: req.body.idAssignment, "attachment.userId" : req.body.userId}, {$set: {"attachment.$.score" :parseInt( req.body.score)}}, false )
}   

export default marking_complete