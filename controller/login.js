import { dbconnection } from "../db/init.js"

const login= (req, res)=> {
    dbconnection.collection("user").findOne({account: req.body.account, password: req.body.password}, function(err, result) {
        console.log(result)
        if(err) {
            throw err
        }
        else {
            if(result) {
                return res.json({message: "Login successfully", userId: result?.userId, login: true})
            }
            else {
                return res.json({message: "Login failed", login: false})
            }
        }
    })
    
}

export default login