const mongoose = require('mongoose');

const moodellBookSchema = new mongoose.Schema(
{
	Title: {
		type: String,
		trim: true,
		require: true,
		maxlength: 30,
		unique: true
	},
	Author:{
		type: String,
		trim: true,
		require: true,
		maxlength: 30,
	},
	Description:{
		type: String,
		trim: true,
		require: true,
		maxlength: 90,
	},
	pinture:{
		type: String,
		trim: true,
		require: true,
		default: "123"
	}
}
,
	{
		timestamps:true
	}
);

module.exports = mongoose.model("books" , moodellBookSchema);