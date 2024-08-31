import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup= async (req,resp)=>{
    try{
        const {fullname, email,password}= req.body;
        // user is a variable.
        const user= await User.findOne({email})
        if(user){
            return resp.status(400).json({message:"User already exists"})
        }
        const hashPassword= await bcryptjs.hash(password,10)
        // createuser is a variable
        const createUser= new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        })
        await createUser.save()
        resp.status(201).json({message:"User created Successfully",
            user:{
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email,
            }
        });

    } catch (error){
        console.log("Error:"+ error.message);
        resp.status(500).json({message:"Internal server error"});

    }
}

// Now, we will define route for this database in user.route.js

// We will define the controller of login in the same database.

export const login= async (req,resp)=>{
    try{
        const {email,password} = req.body;
        const user= await User.findOne({email});
        const isMatch=await bcryptjs.compare(password, user.password);
        if(!user || !isMatch){
            return resp.status(400).json({message:"Invalid username or password."});
        }
        else{
            resp.status(200).json({message:"Login successful",
            user:{
                _id: user._id,
                fullname: user.fullname,
                email:user.email
            }});
        }
        
    } catch (error) {
        console.log("Error:"+error.message);
        resp.status(500).json({message:"Internal server error"});
    }
}
// Now, we will define route for login credential in user.route.js