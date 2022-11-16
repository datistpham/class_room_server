import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || "cockbook",
    api_key: process.env.CLOUDINARY_KEY || "362125891568421",
    api_secret: process.env.CLOUDINARY_SECRET || "kR3bk36ysLWcYuKLy-MN9otXogM"
  });
  
const cloudinaryInstance= cloudinary.v2

export default cloudinaryInstance