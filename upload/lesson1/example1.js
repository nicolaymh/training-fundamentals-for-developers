import dotenv from "dotenv";
import { v4 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

export const uploadImage = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload("assets/images/kitten.jpg");
      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};
