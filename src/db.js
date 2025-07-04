import mongoose from "mongoose";

export const connect = async () => {
    try{
        mongoose.connect("mongodb://localhost/merndb")
    }
    catch(error){
        console.log("Error in database:",error)
    }
}
