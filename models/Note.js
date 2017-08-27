var noteSchema = new Schema({

 noteText: {
 	type:String
 },

 whichArticle: {
 	type:Schema.Types.ObjectId
 }

});

var Note = mongoose.model("Note", noteSchema);
module.exports = Note;