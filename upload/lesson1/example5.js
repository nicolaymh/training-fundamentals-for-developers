import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

const uploadExample5 = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload("assets/images/kitten.jpg", {
         public_id: "cute_animals/kitten",
      });

      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};

export default uploadExample5;
