import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

const uploadExample2 = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload("assets/images/kitten.jpg", {
         public_id: "kitten",
      });

      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};
export default uploadExample2;

/*
 *  Notice that I didn’t use the file extension in the Public ID name. If I did, it would have simply become part of the ID itself. The format of a media resource is always appended to the public_id when it is delivered. For example, if I had specified “kitten.jpg” as the Public ID, then the image would be delivered as “kitten.jpg.jpg”. The exception to this rule is for raw files only, as the file extension should be specified as part of the public_id.

* Reviewing the JSON from this upload, you can see the Public ID is now clearly a kitten and not the randomized ID that we previously saw. 
 */
