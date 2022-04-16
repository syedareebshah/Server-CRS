// const res = require("express/lib/response");

exports.createPostValidators = (req, res, next) => {
    req.check('name', 'koi bat ni').notEmpty();

    req.check('name', 'Invalid Entry').isLength({
        min: 4,
        max: 150
    });

    req.check('Degree', 'write ..').notEmpty();

    req.check('Degree', 'Degree must be between 3 to 20 characters long').isLength({
        min: 4,
        max: 150
    });

    //check for errors

    const errors = req.validationErrors();

    if (errors) {
        const firstErr = errors.map(error => error.msg)[0];
        return res.status(200).json({ error: firstErr });
    }

    next()
}
