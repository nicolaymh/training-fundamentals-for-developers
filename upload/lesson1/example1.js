import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

const uploadExample1 = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload("assets/images/kitten.jpg");
      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};

export default uploadExample1;

/*
* This upload is performed synchronously, and once finished, the uploaded image is immediately available for manipulation and delivery. You can verify this by the JSON that is returned from the upload response.

* Now, there are some important details to see here in the JSON. Notice that the file-name of the image, which was “kitten.jpg” wasn’t retained. Instead, it was changed to be this random string of letters and numbers. That is the file’s Public ID. The reason it changed from “kitten” to that randomly assigned ID is because I didn’t specify the Public ID in the upload.

* Each uploaded image is assigned a unique Public ID, which acts as an identifier to reference the uploaded resource, as well as building dynamic delivery and transformation URLs.

* The reason for this behavior is security - if you are allowing your users to upload files, you don't necessarily want the URLs for those files to be guessable (as in kitten.jpg), but rather generate a long random string that's only available to your app.
 */
