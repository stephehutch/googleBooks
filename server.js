const express = require("express");
//const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors")
const PORT = process.env.PORT || 3002;
const app = express();
const mongoose = require("mongoose")
const bookRoutes = express.Router();
// Define middleware here
let Books = require("./models/books")
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/Books", { useNewUrlParser: true })

const connection = mongoose.connection;


//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

connection.once("open", function () {
  console.log("MongoDB database connection establised sucessfully");
})


// Define API routes here
app.use('/books', bookRoutes);

//Send every other request to the React app
//Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

bookRoutes.route("/").get((req, res) => {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  Books.find( (err, books) => {
    if (err) {
      console.log(err);
    } else {
      res.json(books)
    }
  })
});

bookRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Books.findById(id, function (err, book) {
    if(err) {
      res.status(400).send("book not found")
    }
    res.json(book);
  })  
  
});

bookRoutes.route("/:add").post(function (req, res) {
  let book = new Books(req.body); 
  book.save()
  .then(book => res.status(200).json({"book": "book added"}))
  .catch(err => {
    res.status(400).send("add new book failed")
  })
});

bookRoutes.route("/:delete").delete(function (req, res) {
    let id = req.params.id
    Books.findOneAndRemove(id, function (err, book) {
      if(err) {
        res.status(400).send("book not found")
      }
      res.json(book);
    })
  });


bookRoutes.route("/update/:id").post(function (req, res) {
  let id = req.params.id
  Books.findById(id, function (err, book) {
   if (!book) {
     res.status(404).send("data is not found")
   } else {
    book.book_title = req.body.book_title,
    book.book_image = req.body.book_image,
    book.book_author = req.body.book_author,
    book.book_description = req.body.book_description,
    book.book_link = req.body.book_link
   }
   book.save()
   .then(book => res.status(200).json("book updated"))
   .catch(err => {
     res.status(400).send("update failed")
   })
  })
});

app.use("books", bookRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

