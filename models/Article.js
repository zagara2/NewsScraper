var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({

 headline: {

  type:String,
  trim:true,
  unique:true

 },

 articleLink: {
  type: String,
  unique:true

 },

 summary: {

  type:String

 }

});

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;