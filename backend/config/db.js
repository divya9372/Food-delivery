import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://divyasingh2793:Everest0809@cluster0.dtusxyb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


 