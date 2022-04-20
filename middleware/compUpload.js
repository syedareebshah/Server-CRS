const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const id = 'company'+Date.now();
        console.log(req.files);
        if (!fs.existsSync("./uploads/companies/" + id)) {
            fs.mkdirSync("./uploads/companies/" + id);
        }
        else {
            try {
                fs.rmdirSync("./uploads/companies/" + id, { recursive: true });
                fs.mkdirSync("./uploads/companies/" + id);
            } catch (err) {
                console.error(err);
            }
        }
        cb(null, "uploads/companies/" + id);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + file.originalname.toLowerCase().split(' ').join('-'));
    },
});

 exports.upload = multer({ storage: storage });

