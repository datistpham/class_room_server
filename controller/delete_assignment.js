import { dbconnection } from "../db/init.js"

const delete_assignment= (req, res)=> {
    dbconnection.collection("assignment").deleteOne({idAssignment: req.body.idAssignment}, function(err, result) {
        if(err ) throw err
        else {
            return res.json({delete: true})
        }
    })
}

export default delete_assignment