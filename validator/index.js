exports.createPostValidator = (req, res, next) => {
    
    //title
    req.check("title", "Write a title").notEmpty();
    req.check("title", "It must between 4 and 150 characters").isLength({
        min: 4,
        max: 150
    });

    //body
    req.check("body", "Write a body").notEmpty();
    req.check("body", "It must between 4 and 2000 characters").isLength({
        min: 4,
        max: 2000
    });

    const error = req.validationErrors();

    if(error){
        const firstErrors = error.map(error => error.msg)[0];
        return res.status(400).json({error : firstErrors});
    }

    next();

};