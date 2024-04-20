var express = require("express");
var router = express.Router();

const upload = require("../utils/multer").single("img");

const books = require("../models/bookmodel");

// const BOOK = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { book: books });
});
router.get("/create", function (req, res, next) {
  res.render("create");
});
router.post("/data", upload, async function (req, res, next) {
  // const data = req.body;
  // BOOK.push(data);
  // books.create(req.body).then((data) => {
  //   res.redirect("/readall");
  // });
  // res.redirect("/readall");

  try {
    res.json({ body: req.body, file: req.file });
    // const newbook = new books(req.body);
    // await newbook.save();
    // res.redirect("/readall");
  } catch (error) {
    res.send(error);
  }
});

router.get("/readall", async function (req, res) {
  // books
  //   .find()
  //   .then((books) => {
  //     res.render("readall", { book: books });
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  try {
    const Books = await books.find();
    res.render("readall", { book: Books });
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/delete/:id", async (req, res) => {
  // books.splice(req.params.index, 1);
  // res.redirect("/readall");
  try {
    await books.findByIdAndDelete(req.params.id);
    res.redirect("/readall");
  } catch (error) {
    res.send(error);
  }
});

router.get("/update/:id", async (req, res) => {
  try {
    const book = await books.findById(req.params.id);
    res.render("update", { book: book });
  } catch (error) {
    res.send(error);
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    await books.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/readall");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
