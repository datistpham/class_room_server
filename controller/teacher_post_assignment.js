import { v4 } from "uuid";
import cloudinaryInstance from "../cloudinary/init.js";
import { dbconnection } from "../db/init.js";

const teacher_post_assignment = (req, res) => {
    const data= JSON.parse(req.body.data)
    let attach_file = req.files.attach_file
    const idAssignment= v4()
    const time_created= new Date()
    attach_file.mv("./public/file/"+ idAssignment + attach_file.name, function(err) {
        if(err) throw err
        cloudinaryInstance.uploader.upload("./public/file/"+ idAssignment + attach_file.name,  { resource_type: "raw" }, 
        function(error, result) {
            dbconnection.collection("assignment").insertOne({authorId: data.authorId,authorName: data.authorName, link: "http://localhost:4000/file/"+ idAssignment+attach_file.name, description: data.description, time_created: time_created, classId: data.classId, idAssignment, attachment: [], urlAttachment: result.secure_url, nameAssignment: attach_file.name})
            return res.json({message: "Update successfully", file_assignment: "http://localhost:4000/file/"+ idAssignment+attach_file.name, post: true, description: data.description, authorId: data.authorId,authorName: data.authorName, link: "http://localhost:4000/file/"+ idAssignment+attach_file.name, classId: data.classId, time_created, idAssignment, urlAttachment: result.secure_url, nameAssignment: attach_file.name})
        })
    })
};

export default teacher_post_assignment;
