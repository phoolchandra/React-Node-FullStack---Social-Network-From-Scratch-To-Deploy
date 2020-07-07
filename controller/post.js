const Post =  require("../models/post");
const { compile } = require("morgan");

exports.getPosts = (req, res) => {
    // res.json({
    //     post : [{title : "first post"}, {title : "second post"}]
    // });
    const posts = Post.find()
    .select("_id title body")
    .then((posts) => {
        res.status(200).json({posts: posts});
    })
    .catch(err => compile.log(err));
};


exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("Creating Post", req.body);

    post.save().then(result => {
        res.status(200).json({
            post: result
        });
    });
}
