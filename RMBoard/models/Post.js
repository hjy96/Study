// models/Post.js

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: { type: String, required: true },	
	body: { type: String, required: true },
	//Author: { type: String, required: true },
	createdAt: { type: Date, default: Date.now() },
	updatedAt: { type: Date },
	//Delete: { type: Date },
});

var Post = mongoose.model('post', postSchema);
module.exports = Post;
//module.exports = mongoose.model('Post', postingSchema);