import mongoose from 'mongoose';
import { v1 as uuidv1 } from 'uuid';
import crypto from 'crypto';


var userSchema=new mongoose.Schema({
    Company_Email:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    Company_Name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    Username:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    encry_password:{
        type:String,
        required:true,
        trim:true
    },
    Country:{
        type:String,
        required:true,
        trim:true
    },
    Role:{
        type:String,
        default:'Admin'
    },
    salt:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}
)

userSchema.methods= {

    authenticate: function(plainpassword){      
        return this.securePassword(plainpassword)=== this.encry_password
    },
    securePassword: function(plainpassword){
        if(!plainpassword)return ""
    try {
        return crypto
        .createHmac('sha256', this.salt)
        .update(plainpassword)
        .digest('hex');
    } catch (error) {
        return ""
    }}
}

//Virtual Password
userSchema.virtual("password")
    .set(function(password){
        this._passsword=password;
        this.salt=uuidv1();
        this.encry_password= this.securePassword(password);
    })
    .get(function(){
    return this._passsword;
    })

export const AdminUser = mongoose.model('AdminUser', userSchema);