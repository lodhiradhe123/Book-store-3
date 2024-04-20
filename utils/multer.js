const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(file);
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
