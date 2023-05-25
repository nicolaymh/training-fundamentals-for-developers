import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const uploadExample8 = async () => {
   try {
      const uploadResult = await cloudinary.uploader.upload(
         "https://upload.wikimedia.org/wikipedia/commons/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
         {
            public_id: "tigerCat",
         }
      );

      console.log(uploadResult);
   } catch (error) {
      console.log(error);
   }
};

export default uploadExample8;
