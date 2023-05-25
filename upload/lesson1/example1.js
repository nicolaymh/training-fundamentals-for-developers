import dotenv from "dotenv";
import { v4 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.uploader
   .upload("assets/images/kitten.jpg")
   .then((uploadResult) => console.log(JSON.stringify(uploadResult, null, 2)))
   .catch((error) => console.error(error));
