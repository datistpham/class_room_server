import { dbconnection } from "../db/init.js"

const delete_class= (req, res)=> {
    dbconnection.collection("class").deleteOne({classId: req.body.classId}, function(err, result) {
        if(err) throw err
        else {
            return res.json({delete: true})
        }
    })
}

export default delete_class