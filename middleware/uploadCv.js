const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const id = '625f1d36ebbcb010ee5abc70';
        if (!fs.existsSync("./uploads/resume/" + id)) {
            fs.mkdirSync("./uploads/resume/" + id);
        }
        else {
            try {
                fs.rmdirSync("./uploads/resume/" + id, { recursive: true });
                fs.mkdirSync("./uploads/resume/" + id);
            } catch (err) {
                console.error(err);
            }
        }
        cb(null, "uploads/resume/" + id);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + file.originalname.toLowerCase().split(' ').join('-'));
    },
});

 exports.upload = multer({ storage: storage });

