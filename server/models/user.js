var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
	name:{type:String},
	buckets:[{type:Schema.Types.ObjectId,ref:'Bucket'}]
},{timestamps:true});

mongoose.model('User',UserSchema);