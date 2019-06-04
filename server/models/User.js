const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;


const userSchema = new require('mongoose').Schema({
    name:String,
    lastName:String,
    username:{
        type:String,
    },
    email: String,
    // cases:[{
    //     type:Schema.Types.ObjectId,
    //     ref:'case'
    // }],
  
    profile:{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    role:{
        type: String,
        default: 'USER'
    },
    // party: {
    //   type:Boolean,
    //   default: true
    // }
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);