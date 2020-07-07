const mangoose = require("mongoose")

const postSchema = new mangoose.Schema({
    title : {
        type : String,
        require: true
    },

    body: {
        type : String,
        require: true
        
    }

});

module.exports = mangoose.model("post", postSchema);