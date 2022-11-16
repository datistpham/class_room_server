import { v4 } from "uuid"
import { dbconnection } from "../db/init.js"

const create_class= (req, res)=> {
    const classId= v4()
    const linkClass= v4()
    const linkJoin= v4()
    dbconnection.collection("class").insertOne({className: req.body.className, description: req.body.description, teacher: req.body.userId, time_created: new Date(), classId: classId, linkClass: linkClass, member: [req.body.userId], account: req.body.account, linkJoin: linkJoin, detailMember: [{account: req.body.account, userId: req.body.userId, teacher: true}]}, function(err, result) {
        if(err) throw err
        else {
            return res.json({class_create: true, classId: classId})
        }
    })
}

export default create_class