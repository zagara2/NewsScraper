var savedSchema = new Schema({

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

var Saved = mongoose.model("Article", savedSchema);
module.exports = Saved;