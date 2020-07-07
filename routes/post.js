const express = require("express")
const postController = require("../controller/post")
const validator = require("../validator")

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/post", validator.createPostValidator, postController.createPost);

// const getPosts = (req, res ) => {
//     res.send(" messages is comming from post.js");
// };

module.exports = router