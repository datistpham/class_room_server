import { v4 } from "uuid"
import cloudinaryInstance from "../cloudinary/init.js"
import { dbconnection } from "../db/init.js"

const submit_assignment= (req, res)=> {
    const data= JSON.parse(req.body.data)
    let attach_file = req.files.attach_file
    const time_created= new Date()
    const uuid= v4()
    attach_file.mv("./public/assignment/"+ uuid + attach_file.name, function(err) {
        if(err) throw err
        cloudinaryInstance.uploader.upload("./public/assignment/"+ uuid + attach_file.name,  { resource_type: "raw" }, 
        function(error, result) {
            dbconnection.collection("assignment").updateOne({idAssignment: data.idAssignment}, {$push: {"attachment": {account: data.account, userId: data.userId, classId: data.classId, link: "http://localhost:4000/assignment/"+ uuid+attach_file.name, urlAttachment: result.secure_url, nameAssignment: attach_file.name, time_created: time_created, score: -1}}})
            return res.json({message: "Update successfully", account: data.account, userId: data.userId, classId: data.classId, link: "http://localhost:4000/assignment/"+ uuid+attach_file.name, urlAttachment: result.secure_url, nameAssignment: attach_file.name, time_created: time_created, score: -1})
        })
    })  
}

export default submit_assignment