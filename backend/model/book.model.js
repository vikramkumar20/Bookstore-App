import mongoose from "mongoose";
// this file is used to define the schema of the database related to books

const bookSchema= mongoose.Schema({
    name:String,
    title:String,
    Price: Number,
    Category: String,
    image: String
})
// Now,making a model for the above schema.
const Book= mongoose.model("Book", bookSchema);

export default Book;
// Now, we will define controller for this schema, which is in the file, book.controller.js