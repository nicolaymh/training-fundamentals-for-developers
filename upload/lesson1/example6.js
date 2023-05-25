import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

const uploadExample6 = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload("assets/images/kitten.jpg", {
         folder: "cute_animals",
         public_id: "kitten",
      });

      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};

export default uploadExample6;

/*
 * If you’d prefer, you can also specify the folder path with its own folder parameter in the upload process. In your Terminal
 */
