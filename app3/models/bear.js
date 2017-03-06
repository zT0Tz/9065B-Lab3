

const mongoose     = require('mongoose');
//var Schema       = mongoose.Schema;

//var BearSchema   = new Schema({
const BearSchema   = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email:{
        type: String,
        required: true
    },
    
    gender:{
        type: String,
    },
    
    age:{
        type: Number,
    },
    
    img_url:{
        type: String,
    },
    
    create_date:{
        type: Date,
        default: Date.now
    }

});

const Bear = module.exports = mongoose.model('Bear', BearSchema);
// Get Bears
module.exports.getBears = (callback, limit) => {
        Bear.find(callback).limit(limit);
}
// Get Bear
module.exports.getBearById = (id, callback) => {
        Bear.findById(id,callback);
}
// Add Bear
module.exports.addBear = (bear, callback) => {
        Bear.create(bear,callback);
}

module.exports.updateBear = (id, bear, options, callback) => {
	var query = {_id: id};
	var update = {
		name: bear.name,
		email: bear.email,
		gender: bear.gender,
		age: bear.age,
		img_url: bear.img_url,
	}
	Bear.findOneAndUpdate(query, update, options, callback);
}    
    
    