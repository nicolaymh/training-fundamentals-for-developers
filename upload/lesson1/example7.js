import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// cloudinary.config({
//    cloud_name: process.env.CLOUD_NAME,
//    api_key: process.env.API_KEY,
//    api_secret: process.env.API_SECRET,
// });

const uploadExample7 = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload("assets/images/kitten.jpg", {
         public_id: "cute_animals/cute_cats/kitten",
      });

      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};

export default uploadExample7;

/*
 * If you need to add content to a subfolder, make sure you provide the full path to that subfolder in either parameter. This means I may want the file in my cute_cats folder, which is a subfolder of the previously mentioned cute_animals folder. To do so, I’ll add the subfolder after the top folder in the path.
 */
