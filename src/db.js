import mongoose from "mongoose";

export const connect = async () => {
    try{
        mongoose.connect("mongodb://localhost/merndb")
        console.log("DATABASE CONNECTED")
    }
    catch(error){
        console.log("Error in database:",error)
    }
}
