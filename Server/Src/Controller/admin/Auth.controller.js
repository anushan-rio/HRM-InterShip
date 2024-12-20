import {AdminUser} from "../../Models/admin/Adminuser.model.js";
import {aj} from "../../Helper/CheckEmail.helper.js"

//Signup Controller
export const Signup = async (req,res)=>{
    try{
        const {Company_Email}=req.body;
        
        const ExistingEmail=await AdminUser.findOne({Company_Email})
        if(ExistingEmail){
            return res.status(200).json({Message:"Email Already Exist"})
        }

        //TODO: Checking the disposal mail
        
        else{
            const adminuser=new AdminUser(req.body);
            await adminuser.save()
                .then((userdata)=>{
                    return res.status(200).json(userdata)
                })
            }
    }
    catch(error){
        res.status(500).json({Message:"Something went wrong"})
    }
}

