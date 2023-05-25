import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

const uploadExample4 = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload("assets/images/giraffe.jpg", {
         use_filename: true,
         unique_filename: false,
      });

      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};

export default uploadExample4;
