import { dbconnection } from "../db/init.js"

const join_class= (req, res)=> {
    dbconnection.collection("class").findOne({linkJoin: req.body.idJoin}, function(err, result) {
        if(err) throw err
        else {
            dbconnection.collection("class").findOne({linkJoin: req.body.idJoin}, function(err, result) {

                if(result) {
                    dbconnection.collection("class").updateOne({linkJoin: req.body.idJoin}, { $push: {"detailMember": {account: req.body.account, userId: req.body.userId}}}, function(err, result2) {
                        if(err) throw err
                        else {
                            return res.json({update: true, join: true, classId: result.classId})
                        }
                    })
                }
                else {
                    return res.json({join: false})
    
                }
            }
    )}
    })
}

export default join_class