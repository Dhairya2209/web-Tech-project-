import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://dhairyamaisuriya:dhairya5@cluster0.x0m6o1z.mongodb.net/').then(()=>console.log("DB Connected"))
}