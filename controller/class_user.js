import { dbconnection } from "../db/init.js"

const class_user= (req, res)=> {
    dbconnection.collection("class").find({detailMember: {$elemMatch: {userId: req.query.userId}}}).toArray(function(err, result) {
        if(err) throw err
        else {
            return res.json({result: result})
        }
    })
}

export default class_user