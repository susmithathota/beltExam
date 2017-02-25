var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BucketSchema=new Schema({
	title:{type:String,required:true},
	description:{type:String,required:true},
	status:{type:String,default:'pending'},
	user:{type:Schema.Types.ObjectId,ref:'User'},
	taggedUser:{type:Schema.Types.ObjectId,ref:'User'}
},{timestamps:true});

mongoose.model('Bucket',BucketSchema);