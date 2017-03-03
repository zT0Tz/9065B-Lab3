

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
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
    },

});

module.exports = mongoose.model('Bear', BearSchema);